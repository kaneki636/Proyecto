package com.example.proyecto.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ArticuloController {

    @GetMapping("/articulo")
    public String articulo() {
        return "articulo"; 
    }
}