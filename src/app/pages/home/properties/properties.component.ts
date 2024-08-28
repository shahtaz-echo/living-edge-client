import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { properties } from './common';

@Component({
  selector: 'home-properties',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './properties.component.html',
})
export class PropertiesComponent {
  firstProperty = properties[0];
  secondProperty = properties[1];
  restProperties = properties.slice(2, 4);
}
