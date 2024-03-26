import { OpportunityComponent } from './opportunity/opportunity.component';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './history/history.component';
import { TeachingComponent } from './teaching/teaching.component';
import { InvitacionComponent } from './invitacion/invitacion.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { RelatoComponent } from './relato/relato.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    AboutComponent,
    HistoryComponent,
    OpportunityComponent,
    TeachingComponent,
    InvitacionComponent,
    ContactComponent,
    FooterComponent,
    RelatoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Uriel_networker';

  btnActive: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if ((window as Window).scrollY > 100) {
      this.btnActive = true;
    } else {
      this.btnActive = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
