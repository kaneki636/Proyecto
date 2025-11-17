package com.example.proyecto.model;

import jakarta.persistence.*;
import lombok.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.time.LocalDate;

@Entity
@Table(name = "empleado")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Empleado {

    @Id
    @Column(name = "CC_EMP")
    private Integer ccEmp;

    @Column(name = "NOM_EMPLEADO")
    private String nombre;

    @Column(name = "APELLIDO")
    private String apellido;

    @Column(name = "RH_EMP")
    private String rh;

    @Column(name = "DIRECCION_EMP")
    private String direccion;

    @Column(name = "FECHA_NACIMIENTO_EMP")
    private LocalDate fechaNacimiento;

    @Column(name = "TELEFONO_EMP")
    private Integer telefono;

    @Column(name = "EMAIL_EMP")
    private String email;

    @Column(name = "ESTADO_EMPLEADO")
    private String estado;

    // FK a usuario
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID_USUARIO_FK_EMPLEADO")
    private User usuario;
}
