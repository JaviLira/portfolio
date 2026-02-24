import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habilidades.html',
  styleUrl: './habilidades.css',
})
export class Habilidades implements OnInit {
  public animated = false;
  constructor(private cd: ChangeDetectorRef) {}

  public skills = [
    { name: 'Angular', percent: 85 },
    { name: 'Spring Boot', percent: 80 },
    { name: 'Java', percent: 90 },
    { name: 'Python', percent: 75 },
    { name: 'Selenium', percent: 95 },
    { name: 'Cucumber', percent: 90 },
    { name: 'SQL', percent: 70 },
    { name: 'Docker', percent: 65 }
  ];

ngOnInit() {
  setTimeout(() => {
    this.animated = true;
    this.cd.detectChanges(); // Fuerza a Angular a ver el cambio de ancho
  }, 300);
}
}
