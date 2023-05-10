package es.spring.trabajo.models.services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import es.spring.trabajo.models.entity.Producto;
import es.spring.trabajo.models.entity.Usuario;

public interface ProductoService {

	public List<Producto> findAll();
	
	public Page<Producto> findAll(Pageable page);

	public Producto save(Producto producto);

	public void delete(Long id);

	public Producto findById(Long id);

}
