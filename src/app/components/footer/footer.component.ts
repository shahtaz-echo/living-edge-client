import { Component } from '@angular/core';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowUpRight } from '@ng-icons/heroicons/outline';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NgIconComponent, RouterLink],
  templateUrl: './footer.component.html',
  viewProviders: [provideIcons({ heroArrowUpRight })],
})
export class FooterComponent {}
