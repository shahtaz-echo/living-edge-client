import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'home-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  activeTab: string = 'buy';
  propertyType: string = 'Duplex';
  propertyTypes: string[] = ['Duplex', 'Studio Apartment', 'Single Flat'];
  location: string = 'California, USA';
  locations: string[] = ['California, USA', 'New Yourk, USA', 'Florida, USA'];
  priceRange: string = 'Medium';
  priceRanges: string[] = ['Low', 'Medium', 'High'];
  popularSearches: string[] = [
    'Duplex Home',
    'Residential Service',
    'Studio Apartment',
  ];

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  setSearch(search: string): void {
    console.log(`Selected search: ${search}`);
  }

  search(): void {
    console.log({
      tab: this.activeTab,
      propertyType: this.propertyType,
      location: this.location,
      priceRange: this.priceRange,
    });
  }
}
