import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { blogs } from './common';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowUpRight } from '@ng-icons/heroicons/outline';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home-blogs',
  standalone: true,
  imports: [CommonModule, RouterLink, NgIconComponent],
  templateUrl: './blogs.component.html',
  viewProviders: [provideIcons({ heroArrowUpRight })],
})
export class BlogsComponent {
  blogs = blogs;
}
