package es.spring.trabajo.models.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "venta_usuario")
@Data
public class VentaUsuario {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "idventa_usuario")
    private Long ventaProductoId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_venta")
    private Venta venta;

    @ManyToOne
    @JoinColumn(name = "id_vendedor")
    private Usuario vendedor;
	
}
