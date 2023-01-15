import { VehicleServiceService } from './../../services/vehicle-service.service';
import { Vehicle } from './../../Models/vehicle';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  devices: Array<Vehicle> = [];

  constructor(private vehicleService : VehicleServiceService) {
    
    var a =vehicleService.GetAll().subscribe(vehicle =>
      this.devices = vehicle
    );
  }

}
