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
      titulo: 'Grado en Ingeniería Informática',
      institucion: 'Universidad Ejemplo',
      fecha: '2018 - 2022',
      descripcion: 'Especialización en Ingeniería del Software y Sistemas de Información.',
      tipo: 'grado'
    }
  ];

}
