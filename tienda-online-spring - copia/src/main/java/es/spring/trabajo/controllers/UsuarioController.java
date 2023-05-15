package es.spring.trabajo.controllers;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.spring.trabajo.models.entity.Rol;
import es.spring.trabajo.models.entity.Usuario;
import es.spring.trabajo.models.entity.UsuarioRol;
import es.spring.trabajo.models.services.UsuarioService;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin("*")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;
    
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping
    public ResponseEntity<?> guardarUsuario(@RequestBody Usuario usuario) throws Exception{
    	Map<String, Object> response = new HashMap<>();
    	Set<UsuarioRol> usuarioRoles;
    	try {
        usuarioRoles = new HashSet<>();
        usuario.setPassword(this.bCryptPasswordEncoder.encode(usuario.getPassword()));
        Rol rol = new Rol();
        rol.setId(2L);
        rol.setNombre("USER");

        UsuarioRol usuarioRol = new UsuarioRol();
        usuarioRol.setUsuario(usuario);
        usuarioRol.setRol(rol);

        usuarioRoles.add(usuarioRol);
    	} catch (DataAccessException e) {
			response.put("mensaje", "Error en la bbdd al listar");
			response.put("errors", e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
			return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
		}
        return new ResponseEntity<>(usuarioService.guardarUsuario(usuario,usuarioRoles),HttpStatus.CREATED);
    }


    @GetMapping("/{username}")
    public Usuario obtenerUsuario(@PathVariable("username") String username){
        return usuarioService.obtenerUsuario(username);
    }

    @DeleteMapping("/{usuarioId}")
    public void eliminarUsuario(@PathVariable("usuarioId") Long usuarioId){
        usuarioService.eliminarUsuario(usuarioId);
    }

}
