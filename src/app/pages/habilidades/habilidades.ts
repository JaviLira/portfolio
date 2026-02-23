import { Component, OnInit } from '@angular/core';
interface Skill {
  name: string;
  percent: number;
  isLight?: boolean;
}
@Component({
  selector: 'app-habilidades',
  imports: [],
  templateUrl: './habilidades.html',
  styleUrl: './habilidades.css',
})
export class Habilidades implements OnInit {
  public animated = false;
  
  public skills: Skill[] = [
    { name: 'Photoshop', percent: 85 },
    { name: 'Illustrator', percent: 75, isLight: true },
    { name: 'Indesign', percent: 65 },
    { name: 'HTML', percent: 90, isLight: true },
    { name: 'CSS', percent: 90 },
    { name: 'jQuery', percent: 80, isLight: true },
    { name: 'RWD', percent: 85, isLight: true },
    { name: 'PHP', percent: 75 },
    { name: 'WordPress', percent: 80, isLight: true },
    { name: 'SASS/SCSS', percent: 70 }
  ];

  ngOnInit() {
    // Disparamos la animación tras un breve delay
    setTimeout(() => this.animated = true, 500);
  }
}