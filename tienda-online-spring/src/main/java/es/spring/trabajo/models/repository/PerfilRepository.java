package es.spring.trabajo.models.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import es.spring.trabajo.models.entity.Perfil;


public interface PerfilRepository extends JpaRepository<Perfil, Long>{

	
}
