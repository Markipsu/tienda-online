package es.spring.trabajo.models.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import es.spring.trabajo.models.entity.Rol;

public interface RolRepository extends JpaRepository<Rol,Long> {
}
