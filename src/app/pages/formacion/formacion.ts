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
      fecha: '2019 - 2022',
      descripcion: 'Especializacion en Desarrollo de Aplicaciones Web.',
      tipo: 'grado'
    },
    {
      titulo: 'Bootcamp Automatización de Pruebas con Selenium',
      institucion: 'NTT Data',
      fecha: 'Octubre 2022',
      descripcion: 'Especializacion en Automatización de Pruebas con Selenium en python.',
      tipo: 'curso'
    },
    {
      titulo: 'Procesamiento De Datos Con Java',
      institucion: 'Ipartek',
      fecha: 'Junio 2023 - Septiembre 2023',
      descripcion: 'Especializacion en Procesamiento de Datos con Java.',
      tipo: 'certificacion'
    }
  ];

}
