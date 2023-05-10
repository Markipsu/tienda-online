package es.spring.trabajo.models.services.impl;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.spring.trabajo.models.entity.Usuario;
import es.spring.trabajo.models.repository.PerfilRepository;
import es.spring.trabajo.models.repository.UsuarioRepository;
import es.spring.trabajo.models.services.UsuarioService;
import jakarta.transaction.Transactional;

@Service
public class UsuarioServiceImpl implements UsuarioService {

	@Autowired
	private UsuarioRepository usuariosRepo;
	
	public void guardar(Usuario usuario) {
		usuariosRepo.save(usuario);
	}

	public void eliminar(Integer idUsuario) {
		usuariosRepo.deleteById(idUsuario);
	}

	public List<Usuario> buscarTodos() {
		return usuariosRepo.findAll();
	}

	@Override
	public List<Usuario> buscarRegistrados() {
		return usuariosRepo.findByFechaRegistroNotNull();
	}

	@Override
	public Usuario buscarPorId(Integer idUsuario) {
       Optional<Usuario> optional=usuariosRepo.findById(idUsuario);
       
       if (optional.isPresent())return optional.get();
       
	   return null;
	}
	@Override
	public Usuario buscarPorUsername(String username) {
		return usuariosRepo.findByUsername(username);
	}

	@Transactional
	@Override
	public int bloquear(int idUsuario) {
		return usuariosRepo.lock(idUsuario);
	}

	@Transactional
	@Override
	public int activar(int idUsuario) {
		return usuariosRepo.unlock(idUsuario);
	}
}
