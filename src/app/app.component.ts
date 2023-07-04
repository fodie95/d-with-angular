import { Component, Host, Optional, Self, SkipSelf } from '@angular/core';
import { Logger, ServiceExample } from './app.module';
import { PaymentMethod } from './services/payement/payement-method';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[

  ]
})
export class AppComponent {
  title = 'talk';

  constructor(@SkipSelf() private service:ServiceExample) {
  }
}
