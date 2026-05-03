import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  level: 'Avanzado' | 'Intermedio' | 'Explorando';
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habilidades.html',
  styleUrl: './habilidades.css',
})
export class Habilidades{
  public categories: SkillCategory[] = [
    {
      title: 'Desarrollo Frontend',
      icon: 'bi bi-layout-text-sidebar-reverse',
      skills: [
        { name: 'Angular', icon: 'bi bi-hexagon-fill', level: 'Avanzado' },
        { name: 'TypeScript', icon: 'bi bi-filetype-tsx', level: 'Avanzado' },
        { name: 'HTML5/CSS3', icon: 'bi bi-code-slash', level: 'Avanzado' }
      ]
    },
    {
      title: 'Backend & Bases de Datos',
      icon: 'bi bi-database-fill-gear',
      skills: [
        { name: 'Java / Spring Boot', icon: 'bi bi-cup-hot-fill', level: 'Avanzado' },
        { name: 'Python', icon: 'bi bi-terminal-fill', level: 'Intermedio' },
        { name: 'SQL (PostgreSQL/MySQL)', icon: 'bi bi-database-fill', level: 'Avanzado' }
      ]
    },
    {
      title: 'QA Automation & Herramientas',
      icon: 'bi bi-check-all',
      skills: [
        { name: 'Selenium / Cucumber', icon: 'bi bi-robot', level: 'Avanzado' },
        { name: 'Docker', icon: 'bi bi-box-seam-fill', level: 'Intermedio' },
        { name: 'Git / GitHub', icon: 'bi bi-github', level: 'Avanzado' }
      ]
    }
  ];
}
