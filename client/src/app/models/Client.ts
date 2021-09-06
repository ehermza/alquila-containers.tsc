
export class Client {
    public _id: string = '';
    public name: string = '';
    public telephone?: string;
    public DNI?: string;
    public business?: string;
    public active?: boolean;
    public deudas_total: number = 0;
    public pagos_total: number = 0;

    // constructor(idclient:string) { 
    constructor(isActive?: boolean) {
        this.active = isActive;
    }

    public setId(ID: string) {
        this._id = ID;
    }

    public setAtributtes(nameClient:string) {
        this.name = nameClient;
    }
/*     public setAtributtes(
        name: string,
        phone?: string,
        DNI?: string,
        business?: string,
        active?: boolean,
        debe?: number,
        haber?: number
    ) {
        this.name = name;
        this.telephone = phone;
        this.business = business;
        this.active = active;
        this.deudas_total = debe;
        this.pagos_total = haber;
    }
 */
    public setTotalPagos(importe: number) {
        this.pagos_total = importe;
    }
}
