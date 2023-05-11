package es.spring.trabajo.models.services;


import java.util.Set;

import es.spring.trabajo.models.entity.Usuario;
import es.spring.trabajo.models.entity.UsuarioRol;

public interface UsuarioService {

    public Usuario guardarUsuario(Usuario usuario, Set<UsuarioRol> usuarioRoles) throws Exception;

    public Usuario obtenerUsuario(String username);

    public void eliminarUsuario(Long usuarioId);
    
    public Usuario findById(Long id);
}
