package com.example.proyecto.model;

import jakarta.persistence.*;
import lombok.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.math.BigDecimal;

@Entity
@Table(name = "producto")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Producto {

    @Id
    @Column(name = "COD_PRODUCTO")
    private Integer codigoProducto;

    @Column(name = "CANTIDAD_PRODUCTO")
    private Integer cantidadProducto;

    @Column(name = "NOM_PRODUCTO")
    private String nombre;

    @Column(name = "PRECIO_PRODUCTO")
    private Integer precioProducto;

    @Column(name = "CANTIDAD_MINIMA")
    private Integer cantidadMinima;

    @Column(name = "CANTIDAD_MAXIMA")
    private Integer cantidadMaxima;

    @Column(name = "STOCK")
    private Integer stock;

    @Column(name = "ESTADO_PRODUCTO")
    private String estadoProducto;

    @Column(name = "COSTO_UNITARIO", precision = 10, scale = 2)
    private BigDecimal costoUnitario;

    // FK a marca (no modelada aquí)
    @Column(name = "ID_MARCA_FK_PRODUCTO")
    private Integer idMarca;

    // FK a venta
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID_VENT_FK_PRODUCTO")
    private Venta venta;

    // FK a movimiento / proveedor / unidad / color (guardamos ids por simplicidad)
    @Column(name = "ID_MOV_FK_PRODUCTO")
    private Integer idMov;

    @Column(name = "ID_PROVE_FK_PRODUCTO")
    private Integer idProveedor;

    @Column(name = "ID_UNIDAD_FK_PRODUCTO")
    private Integer idUnidad;

    @Column(name = "ID_COLOR_FK_PRODUCTO")
    private Integer idColor;
    
}
