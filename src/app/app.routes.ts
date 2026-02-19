import { Routes } from '@angular/router';
import { Home } from "./components/home/home";
import { SobreMi } from './pages/sobre-mi/sobre-mi';
import { Experiencia } from './pages/experiencia/experiencia';
import { Formacion } from './pages/formacion/formacion';
import { Habilidades } from './pages/habilidades/habilidades';
import { Contacta } from './pages/contacta/contacta';



export const routes: Routes = [
  { path: '', component: Home },
  { path: 'sobre-mi', component: SobreMi },
  { path: 'experiencia', component: Experiencia },
  { path: 'formacion', component: Formacion },
  { path: 'habilidades', component: Habilidades },
  { path: 'contacta', component: Contacta },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
