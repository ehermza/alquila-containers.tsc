
export class Client {
    public _id: string= '';
    public name: string= '';
    public telephone?: string;
    public DNI?: string;
    public business?: string;
    public active?: boolean;

    // constructor(idclient:string) { 
    constructor() { }
    
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
