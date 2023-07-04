import { Component, Host, Optional, Self, SkipSelf } from '@angular/core';
import { Logger } from './app.module';
import { PaymentMethod } from './services/payement/payement-method';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'talk';

  constructor() {
  }
}
