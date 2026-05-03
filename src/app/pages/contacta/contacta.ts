import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacta',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacta.html',
  styleUrl: './contacta.css',
})
export class Contacta {
  contactoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  enviarFormulario() {
    if (this.contactoForm.valid) {
      console.log('Datos del formulario:', this.contactoForm.value);
      // Aquí podrías conectar con tu backend de Spring Boot
      alert('¡Mensaje enviado con éxito! (Simulado)');
      this.contactoForm.reset();
    }
  }
}
