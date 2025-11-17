package com.example.proyecto.model;

import jakarta.persistence.*;
import lombok.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "pedido")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Pedido {

    @Id
    @Column(name = "ID_PEDIDO")
    private Integer idPedido;

    @Column(name = "FECHA_PEDIDO")
    private LocalDate fechaPedido;

    @Column(name = "FECHA_ENTREGA_PEDIDO")
    private LocalDate fechaEntrega;

    @Column(name = "SUBTOTAL_PEDIDO")
    private Integer subtotal;

    @Column(name = "PRECIO")
    private Integer precio;

    @Column(name = "ESTADO_PEDIDO")
    private String estado;

    // FK a empleado
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CC_EMP_FK_PEDIDO")
    private Empleado empleado;

    // FK a cliente
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CC_CLIENTE_FK_PEDIDO")
    private Cliente cliente;

    // FK a venta
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID_VENT_FK_PEDIDO")
    private Venta venta;
}
