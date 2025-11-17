package com.example.proyecto.model;

import jakarta.persistence.*;
import lombok.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;
import java.time.LocalDate;

@Entity
@Table(name = "venta")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Venta {

    @Id
    @Column(name = "ID_VENT")
    private Integer idVent;

    @Column(name = "FECHA_VENTA")
    private LocalDate fechaVenta;

    @Column(name = "TOTAL_VENTA")
    private Long totalVenta;

    @Column(name = "ESTADO")
    private String estado;

    // 1 Venta -> N Pedidos (según tu modelo, pedido referencia venta)
    @OneToMany(mappedBy = "venta", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Pedido> pedidos;

    // 1 Venta -> N Productos (productos pueden referenciar una venta en tu SQL)
    @OneToMany(mappedBy = "venta", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Producto> productos;
}
