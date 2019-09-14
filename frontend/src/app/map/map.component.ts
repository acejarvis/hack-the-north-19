import { Component, OnInit } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public map: any = { lat: 0.000, lng: 0.000 };

  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.mapService.getHeatPoints().subscribe(result => {
      console.log(result);
    });
    this.mapService.getCurrentPosition().subscribe(result => {
      console.log(result);
      this.map.lat = result.coords.latitude;
      this.map.lng = result.coords.longitude;
    });

    
  }

}
