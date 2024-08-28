import { Component } from '@angular/core';
import { AboutHeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutHeroComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
