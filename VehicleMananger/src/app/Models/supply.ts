import { SupplyRequest } from './Requests/supply-request';
export class Supply {
    
    constructor(){
        this.DateSupply = new Date();
        this.KM = 0;
        this.Quantity = 0;
        this.ValueSupply = 0;
    }

    public id : any;
    public VehicleId : any;
    public KM : any;
    public Quantity : any;
    public DateSupply : any;
    public ValueSupply : any;

    public CastToSupplyRequest(): SupplyRequest{
        var request = new SupplyRequest();
        request.vehicleId = this.VehicleId;
        request.KM = this.KM;
        request.date = this.DateSupply;
        request.quantity = this.Quantity;
        request.value = this.ValueSupply;
        return request;
    }
}
