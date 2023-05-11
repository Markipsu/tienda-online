package es.spring.trabajo.models.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import es.spring.trabajo.models.entity.Venta;

public interface VentaRepository extends JpaRepository<Venta, Long>{

}
