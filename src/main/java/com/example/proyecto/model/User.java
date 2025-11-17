package com.example.proyecto.model;

import jakarta.persistence.*;
import lombok.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "usuario")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @Column(name = "ID_USUARIO")
    private Integer idUsuario;

    @Column(name = "NOM_USUARIO")
    private String nombre;

    @Column(name = "CONTRASEÑA_USUARIO")
    private String contrasena;

    @Column(name = "ESTADO_USUARIO")
    private String estado;

    // FK a rol
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID_ROL_FK_USUARIO")
    private Rol rol;

    // opcionales: relaciones inversas con cliente/empleado no mapeadas aquí para mantener simpleza
}
