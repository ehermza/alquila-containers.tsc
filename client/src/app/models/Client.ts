
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

    public setTotalPagos(importe: number) {
        this.pagos_total = importe;
    }
}
