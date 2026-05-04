import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Formacion_i {
  titulo: string;
  institucion: string;
  fecha: string;
  descripcion: string;
  tipo: 'grado' | 'certificacion' | 'curso';
}

@Component({
  selector: 'app-formacion',
  imports: [CommonModule],
  templateUrl: './formacion.html',
  styleUrl: './formacion.css',
})
export class Formacion {
  public formaciones: Formacion_i[] = [
    {
      titulo: 'Grado en Desarrollo de Aplicaciones Web',
      institucion: 'Grado superior',
      fecha: '2018 - 2020',
      descripcion: 'Especialización en Ingeniería del Software y Sistemas de Información.',
      tipo: 'grado'
    },
    {
      titulo: 'Full Stack Java Developer',
      institucion: 'Bootcamp Tech',
      fecha: '2023',
      descripcion: 'Desarrollo intensivo con Spring Boot, Angular y microservicios.',
      tipo: 'curso'
    },
    {
      titulo: 'Selenium WebDriver con Java',
      institucion: 'Udemy / TestAutomationU',
      fecha: '2024',
      descripcion: 'Automatización de pruebas de interfaz de usuario y frameworks BDD.',
      tipo: 'certificacion'
    }
  ];

}
