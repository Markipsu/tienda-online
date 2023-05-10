package es.spring.trabajo.models.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Table(name = "productos")
@Data
public class Producto {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotEmpty(message = "nombre requerido")
	@Size(min = 4,message = "tamaño minimo de 4")
	@Column(nullable = false)
	private String nombre;

	@NotEmpty(message = "apellido requerido")
	private String apellido;

	@NotEmpty(message = "email requerido")
	@Email(message = "email con formato erroneo")
	@Column(unique = true, nullable = false)
	private String email;

	@NotNull(message = "fecha requerida")
	@Column(name = "create_at")
	@Temporal(TemporalType.DATE)
	private Date createAt;
	
	private String foto;
	
	
}
