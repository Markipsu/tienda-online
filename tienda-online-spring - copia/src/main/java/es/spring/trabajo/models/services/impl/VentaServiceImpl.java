package es.spring.trabajo.models.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import es.spring.trabajo.models.entity.Producto;
import es.spring.trabajo.models.entity.Usuario;
import es.spring.trabajo.models.entity.Venta;
import es.spring.trabajo.models.repository.ProductoRepository;
import es.spring.trabajo.models.repository.VentaRepository;
import es.spring.trabajo.models.services.ProductoService;
import es.spring.trabajo.models.services.VentaService;

@Service
public class VentaServiceImpl implements VentaService {

	@Autowired
	private VentaRepository ventaRepository;


	@Override
	public Venta save(Venta venta) {
		return ventaRepository.save(venta);
	}



	@Override
	public List<Venta> findByUsuario(Usuario comprador) {
		return ventaRepository.findByComprador(comprador);
	}


}
