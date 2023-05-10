package es.spring.trabajo.models.services;

import java.util.List;

import es.spring.trabajo.models.entity.Usuario;

public interface UsuarioService {
	
	void guardar(Usuario usuario);
	
	void eliminar(Integer idUsuario);
	
	List<Usuario> buscarTodos();
	List<Usuario> buscarRegistrados();
	
	Usuario buscarPorId(Integer idUsuario);
	Usuario buscarPorUsername(String username);
	
	int bloquear(int idUsuario);
	int activar(int idUsuario);
}
