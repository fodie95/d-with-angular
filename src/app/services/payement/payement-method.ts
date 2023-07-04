import { Observable, of } from "rxjs";


export interface PaymentRequest {
  accoutNumber : string,
  amount:number,
  secret : string
}

export interface PaymentResponse {
  ack : boolean
}

export interface PaymentMethodInfo {
  name   :   string,
  banner : string,
  transactionCost : number
}

export abstract class PaymentMethod {
  abstract name:string
  abstract banner : string
  abstract pay(request: PaymentRequest) : Observable<PaymentResponse>
  getInfo() {

  }
}

export class BankilyService  extends  PaymentMethod {
  override name: string = "BANKILY";
  override banner: string = 'bankily.png';


  override pay(request: PaymentRequest): Observable<PaymentResponse> {
    console.log("start processing payment request",request)

    return of({ack:true})
  }

}


export class MasrviService extends PaymentMethod {
  override name: string = "MASRVI";
  override banner: string =  "masrvi.png";
  override pay(request: PaymentRequest): Observable<PaymentResponse> {
    throw new Error("Method not implemented.");
  }

}



export class ClickService extends PaymentMethod {
  override name: string = "CLICK";
  override banner: string =  "click.png";
  override pay(request: PaymentRequest): Observable<PaymentResponse> {
    throw new Error("Method not implemented.");
  }

}
