package com.example.proyecto.model;

import jakarta.persistence.*;
import lombok.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

@Entity
@Table(name = "rol")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Rol {

    @Id
    @Column(name = "ID_ROL")
    private Integer idRol;

    @Column(name = "NOM_ROL")
    private String nombre;

    @Column(name = "ESTADO_ROL")
    private String estado;

    // 1 Rol -> N Usuarios
    @OneToMany(mappedBy = "rol", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<User> usuarios;
}
