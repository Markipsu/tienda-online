package es.spring.trabajo.models.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import es.spring.trabajo.models.entity.Usuario;
import es.spring.trabajo.models.entity.Venta;

public interface VentaRepository extends JpaRepository<Venta, Long>{

	public List<Venta> findByComprador(Usuario Comprador);
	
}
