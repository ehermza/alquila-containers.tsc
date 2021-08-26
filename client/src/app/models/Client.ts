
export class Client {
    public _id: string= '';
    public name: string= '';
    public telephone?: string;
    public DNI?: string;
    public business?: string;
    public active?: boolean;
    public deudas_total:Number= 0;
    public pagos_total:Number= 0;

    // constructor(idclient:string) { 
    constructor(isActive?:boolean) {
        this.active= isActive;
     }
    
    public setId(ID: string) { 
        this._id= ID;
    }
    
    public setAtributtes(
        name: string, telephone?: string, DNI?: string, business?: string, active?: boolean
    ) {
        this.name = name;
        this.telephone = telephone;
        this.business = business;
        this.active = active;
    }
}
