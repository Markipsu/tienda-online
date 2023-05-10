package es.spring.trabajo.models.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import es.spring.trabajo.models.entity.Producto;
import es.spring.trabajo.models.entity.Usuario;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
	
}
