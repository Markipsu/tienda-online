package es.spring.trabajo.models.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import es.spring.trabajo.models.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario,Long> {

    public Usuario findByUsername(String username);

}
