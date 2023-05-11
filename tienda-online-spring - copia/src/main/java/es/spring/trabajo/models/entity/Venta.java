package es.spring.trabajo.models.entity;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "ventas")
@Data
public class Venta {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "precio_total")
	private Double precioTotal;
	
	@Column(name = "fecha_venta")
	private Date fechaVenta;
	
	@ManyToMany(mappedBy = "ventas")
	@JsonIgnore
	private Set<Usuario> vendedores;
	
	@ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
	@JoinColumn(name = "comprador_id")
	private Usuario comprador;
	
	@ManyToMany(mappedBy = "ventas")
	@JsonIgnore
    private Set<Producto> productos;

}
