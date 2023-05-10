package es.spring.trabajo.controllers;

import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import es.spring.trabajo.models.entity.Perfil;
import es.spring.trabajo.models.entity.Usuario;
import es.spring.trabajo.models.services.UsuarioService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = { "http://localhost:4200" })
public class UsuarioRestController {

	@Autowired
	private UsuarioService usuarioService;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@PostMapping("/usuarios")
	public ResponseEntity<?> guardarUsuario(@Valid @RequestBody Usuario usuario, BindingResult result) {
		Map<String, Object> response = new HashMap<>();
		boolean bandera=true;
		if(usuarioService.buscarPorUsername(usuario.getUsername())==null) {
			bandera=false;
		}
		
		if (result.hasErrors() || !bandera) {
			List<String> errors = result.getFieldErrors().stream()
					.map(err -> "El campo '" + err.getField() + "' " + err.getDefaultMessage())
					.collect(Collectors.toList());
			if(!bandera) {
				errors.add("Email o usuario ya existente");
			}
			response.put("errors", errors);
			
			return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
		}
		try {
			String pwdPlano=usuario.getPassword();
			String pwdEncriptado=passwordEncoder.encode(pwdPlano);
			
			usuario.setPassword(pwdEncriptado);
			usuario.setEstatus(1); // Activado por defecto
			usuario.setFechaRegistro(new Date()); // Fecha de Registro, la fecha actual del servidor
			
			// Creamos el Perfil que le asignaremos al usuario nuevo
			Perfil perfil = new Perfil();
			perfil.setId(3); // Perfil USUARIO
			usuario.agregar(perfil);
			usuarioService.guardar(usuario);
		} catch (DataAccessException e) {
			response.put("mensaje", "Error en la bbdd al crear");
			response.put("error", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
		response.put("mensaje", "El cliente ha sido creado con exito");
		response.put("usuario", usuario);
		return new ResponseEntity<>(response,HttpStatus.OK);
		
	}
	
	@GetMapping("/usuarios/{username}")
	public Usuario obtenerUsuario(@PathVariable("username") String username) {
		return usuarioService.buscarPorUsername(username);
	}
	
	@DeleteMapping("/usuarios/{id}")
	public void eliminarUsuario(@PathVariable("id") Integer id){
		usuarioService.eliminar(id);
	}

}
