//#region Declarations
import { Vehicle } from './../Models/vehicle';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
//#endregion

@Injectable({
  providedIn: 'root'
})

export class VehicleServiceService {

  private api: string = "https://localhost:7232/";

  constructor(private http : HttpClient ) {}

  //#region Routes
  Get(){

  }

  GetAll(){
    var urlGetAll = this.api + 'Vehicle/GetAll/';
    return this.http.get<Array<Vehicle>>(urlGetAll);
  }
  //#endregion
}
