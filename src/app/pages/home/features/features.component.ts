import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { features } from './common';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowUpRight } from '@ng-icons/heroicons/outline';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home-features',
  standalone: true,
  imports: [CommonModule, NgIconComponent, RouterLink],
  templateUrl: './features.component.html',
  viewProviders: [provideIcons({ heroArrowUpRight })],
})
export class FeaturesComponent {
  features = features;
}
