import { Component } from '@angular/core';
import { reviews } from './common';
import { CommonModule } from '@angular/common';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroStar } from '@ng-icons/heroicons/outline';
import { heroStarSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'home-reviews',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './reviews.component.html',
  viewProviders: [provideIcons({ heroStar, heroStarSolid })],
})
export class ReviewsComponent {
  reviews = reviews;
  getStars(rating: number): string[] {
    const stars: string[] = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push('full');
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push('half');
      } else {
        stars.push('empty');
      }
    }

    return stars;
  }
}
