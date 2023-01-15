import { Vehicle } from './../Models/vehicle';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleServiceService {

  private api: string = "https://localhost:7232/";
  constructor(private http : HttpClient ) {
    
  }

  Get(){

  }

  GetAll(){
    var urlGetAll = 'https://localhost:7232/Vehicle/GetAll/';
    return this.http.get<Array<Vehicle>>(urlGetAll);
  }
}
