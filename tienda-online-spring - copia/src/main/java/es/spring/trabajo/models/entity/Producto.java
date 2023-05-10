package es.spring.trabajo.models.entity;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.core.sym.Name;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Entity
@Table(name = "productos")
public class Producto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotEmpty(message = "nombre requerido")
	@Column(nullable = false)
	private String nombre;

	private String imagen;
	
	private String descripcion;
	
	private Double precio;

	@ManyToOne
	@JoinColumn(name = "vendedor_id")
	private Usuario vendedor;
	
	@OneToMany(cascade = CascadeType.ALL,fetch = FetchType.LAZY,mappedBy = "productos")
    private Set<VentaProducto> ventaProductos = new HashSet<>();

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Double getPrecio() {
		return precio;
	}

	public void setPrecio(Double precio) {
		this.precio = precio;
	}

	public Usuario getVendedor() {
		return vendedor;
	}

	public void setVendedor(Usuario vendedor) {
		this.vendedor = vendedor;
	}

	public Set<VentaProducto> getVentaProductos() {
		return ventaProductos;
	}

	public void setVentaProductos(Set<VentaProducto> ventaProductos) {
		this.ventaProductos = ventaProductos;
	}

	public Producto(Long id, @NotEmpty(message = "nombre requerido") String nombre, String imagen, String descripcion,
			Double precio, Usuario vendedor, Set<VentaProducto> ventaProductos) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.imagen = imagen;
		this.descripcion = descripcion;
		this.precio = precio;
		this.vendedor = vendedor;
		this.ventaProductos = ventaProductos;
	}

	public Producto() {}
	
}
