import { Component } from '@angular/core';
import { ContactHeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ContactHeroComponent],
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent {}
