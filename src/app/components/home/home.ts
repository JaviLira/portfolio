import { Component } from '@angular/core';
import { Services } from './services/services';


@Component({
  selector: 'app-home',
  imports: [Services],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
