import { Component } from '@angular/core';
import { MapComponent } from '../../../components/map/map.component';

@Component({
  selector: 'home-property-network',
  standalone: true,
  imports: [MapComponent],
  templateUrl: './property-network.component.html',
})
export class PropertyNetworkComponent {}
