drop database if exists tfg;
create database tfg;
use tfg;

CREATE TABLE usuarios (
  id INT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  contraseña VARCHAR(255) NOT NULL,
  direccion VARCHAR(255),
  ciudad VARCHAR(255),
  codigo_postal Int,
  pais VARCHAR(50),
  categoria enum("Admin","usuario")
);

-- Tabla de productos
CREATE TABLE productos (
  id INT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  imagen VARCHAR(255) NOT NULL,
  descripcion VARCHAR(255),
  precio DECIMAL(10, 2) NOT NULL,
  vendedor_id INT,
  FOREIGN KEY (vendedor_id) REFERENCES usuarios(id)
);

-- Tabla de compras
CREATE TABLE compras (
  id INT PRIMARY KEY,
  comprador_id INT,
  producto_id INT,
  cantidad INT,
  precio_total DECIMAL(10, 2),
  fecha_compra DATE,
  FOREIGN KEY (comprador_id) REFERENCES usuarios(id),
  FOREIGN KEY (producto_id) REFERENCES productos(id)
);

-- Tabla de ventas
CREATE TABLE ventas (
  id INT PRIMARY KEY,
  vendedor_id INT,
  producto_id INT,
  cantidad INT,
  precio_total DECIMAL(10, 2),
  fecha_venta DATE,
  FOREIGN KEY (vendedor_id) REFERENCES usuarios(id),
  FOREIGN KEY (producto_id) REFERENCES productos(id)
);

INSERT INTO usuarios (id, nombre, email, contraseña, direccion, ciudad, codigo_postal, pais,categoria)VALUES 
 (1, 'Juan Pérez', 'juan@example.com', 'juan123', 'Calle Principal 123', 'Madrid', 12345, 'España','admin'),
 (2, 'María López', 'maria@example.com', 'maria123', 'Avenida Secundaria 456', 'Paris', 54321, 'Francia','usuario'),
 (3,'Jose Maria','jose@example.com','jose123','calle 4','Barcelona',36842,'España','usuario');
 
 INSERT INTO productos (id, nombre, imagen, descripcion, precio, vendedor_id)VALUES
 (1, 'Camiseta Roja', 'CamisetaR.jpg','Camiseta de algodón de color rojo', 19.99, 1),
 (2, 'Zapatos Deportivos', 'Zapatos.jpg','Zapatos para correr de marca XYZ', 49.99, 1),
 (3,'mochila','Mochila.jpg','mochila ajustable',20.99,1);

INSERT INTO compras (id, comprador_id, producto_id, cantidad, precio_total, fecha_compra)VALUES
 (1, 2, 1, 2, 39.98, '2023-05-01'),
 (2, 3, 2, 1, 49.99, '2023-05-02');

INSERT INTO ventas (id, vendedor_id, producto_id, cantidad, precio_total, fecha_venta)VALUES 
 (1, 2, 2, 1, 49.99, '2023-05-03'),
 (2, 3, 1, 2, 39.98, '2023-05-04');
