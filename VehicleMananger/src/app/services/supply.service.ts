//#region Declations
import { Supply } from './../Models/supply';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SupplyRequest } from '../Models/Requests/supply-request';
//#endregion

@Injectable({
  providedIn: 'root'
})
export class SupplyService {

  private api: string = "https://localhost:7232/";

  constructor(private http : HttpClient ) { }

  //#region Routes
  Check(){
    return this.http.get(this.api+"Supply/Check/")
  }

  Add(supply : Supply){
    var supplyAdd: SupplyRequest;
    supplyAdd = supply.CastToSupplyRequest();
    var urlAdd = this.api + 'Supply/Add';
    console.log(urlAdd);
    return this.http.post<boolean>(urlAdd,supplyAdd);
  }
  //#endregion
}
