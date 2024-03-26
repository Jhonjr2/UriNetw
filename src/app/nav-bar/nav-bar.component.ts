import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toHome(){
    document.getElementById('inicio')?.scrollIntoView({behavior:"smooth"});
  }

  toHistory(){
    document.getElementById('history')?.scrollIntoView({behavior: 'smooth'});
  }

  toTeaching(){
    document.getElementById('enseñanza')?.scrollIntoView({behavior: 'smooth'});
  }

  toRelatos(){
    document.getElementById('relatos')?.scrollIntoView({behavior:'smooth'})
  }

  toInvitacion(){
    document.getElementById('invitacion')?.scrollIntoView({behavior: 'smooth'});
  }

  toContacto(){
    document.getElementById('contacto')?.scrollIntoView({behavior: 'smooth'});
  }



}

