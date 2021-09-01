
export class Pago 
{
    client: string = "";
    value?: Number;
    month_paid: string = "";
    paid_at: Date = new Date();
    paid_str: string= '';
    id_container: Number= 0;
    recibo_n?: string;
    client_name?: string;

    constructor() {}

    setClientName(nombre:string) {
        this.client_name= nombre;
    }

    getIdClient() {
        return this.client;
    }
}