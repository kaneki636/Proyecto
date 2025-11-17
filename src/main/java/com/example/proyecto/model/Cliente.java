package com.example.proyecto.model;

import jakarta.persistence.*;
import lombok.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "cliente")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Cliente {

    @Id
    @Column(name = "CC_CLIENTE")
    private Integer ccCliente;

    @Column(name = "NOM_CLIENTE")
    private String nombre;

    @Column(name = "APELLIDO_CLIENTE")
    private String apellido;

    @Column(name = "DIRECCION_CLIENTE")
    private String direccion;

    @Column(name = "TELEFONO_CLIENTE")
    private Integer telefono;

    @Column(name = "EMAIL_CLIENTE")
    private String email;

    @Column(name = "ESTADO_CLIENTE")
    private String estado;

    // FK a usuario
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID_USUARIO_FK_CLIENTE")
    private User usuario;
}
