import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { FeaturesComponent } from './features/features.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyNetworkComponent } from './property-network/property-network.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ReviewsComponent } from './reviews/reviews.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    FeaturesComponent,
    PropertiesComponent,
    PropertyNetworkComponent,
    BlogsComponent,
    ReviewsComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
