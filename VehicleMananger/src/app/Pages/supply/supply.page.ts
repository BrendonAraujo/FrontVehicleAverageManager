import { Component, OnInit } from '@angular/core';
import { Supply } from 'src/app/Models/supply';
import { Vehicle } from 'src/app/Models/vehicle';
import { SupplyService } from 'src/app/services/supply.service';

@Component({
  selector: 'app-supply',
  templateUrl: './supply.page.html',
  styleUrls: ['./supply.page.scss'],
})
export class SupplyPage implements OnInit {

  vehicle: Vehicle = new Vehicle();
  supply: Supply = new Supply();

  constructor(private supplyService : SupplyService) {}

  ngOnInit() {
    this.vehicle.plate = "RAD3F42";
    this.vehicle.id = 1;
  }

  SaveSupply(date: any, km: any, quantity: any, value: any){
    // this.supply.DateSupply = new Date(date);
    this.supply.KM = km;
    this.supply.Quantity = quantity;
    this.supply.ValueSupply = value;
    this.supply.VehicleId = this.vehicle.id;
    this.supplyService.Add(this.supply).subscribe(t => console.log(t));
  }

}