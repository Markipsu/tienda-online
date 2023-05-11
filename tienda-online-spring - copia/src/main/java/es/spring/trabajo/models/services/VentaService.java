package es.spring.trabajo.models.services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import es.spring.trabajo.models.entity.Producto;
import es.spring.trabajo.models.entity.Usuario;
import es.spring.trabajo.models.entity.Venta;

public interface VentaService {
	
	public Page<Venta> findAll(Pageable page);

	public Venta save(Venta venta);

	public Page<Venta> findByUsuario(Usuario comprador ,Pageable page);

}
