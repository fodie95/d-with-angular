import { Inject, Injectable } from '@angular/core';
import { PaymentMethod } from './payement-method';


@Injectable()
export class PayementMethodManagerService {

  private readonly registry =  new Map<String,PaymentMethod>();

  constructor(@Inject(PaymentMethod) private paymentMethods : PaymentMethod[]) {}

  private register(pmd : PaymentMethod) : void {
    this.registry.set(pmd.name,pmd)
  }

  supportedPaymentMethod(): PaymentMethod[]  {
    return this.paymentMethods
  }


}
