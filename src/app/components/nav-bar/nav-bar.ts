import { Component, HostListener, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {

  @Output() scrollChange = new EventEmitter<boolean>();

  isScrolled = false;
  isVisible = false;

@HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.scrollY || document.documentElement.scrollTop;
    const newState = offset > 150;

    if (this.isScrolled !== newState) {
      this.isScrolled = newState;
      this.isVisible = newState;
      this.scrollChange.emit(this.isScrolled);
    }
  }


  toggleMenu() {
    this.isVisible = !this.isVisible;
  }

}
