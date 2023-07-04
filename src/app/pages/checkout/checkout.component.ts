import { PaymentMethod } from 'src/app/services/payement/payement-method';
import { PayementMethodManagerService } from './../../services/payement/payement-method-manager.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {

  selectedPMD? : PaymentMethod

   constructor(public payementMethodManagerService: PayementMethodManagerService) {}

   selectPMD(pmd: PaymentMethod) {
    this.selectedPMD = pmd
  }

  validate() {
    this.selectedPMD?.pay({
      amount:600,
      accoutNumber : "XXX-XXX-XXX-XXX",
      secret : "AAAA-SSS-AAA-SSS"
    })
  }
}
