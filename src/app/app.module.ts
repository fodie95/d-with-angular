import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './layout/header/nav-bar/nav-bar.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { BankilyService, MasrviService, PaymentMethod } from './services/payement/payement-method';
import { PayementMethodManagerService } from './services/payement/payement-method-manager.service';

export abstract class Logger {
  abstract log(message:string):void
}

export interface Log {
  name:number
}
class ConsoleLogger  implements Logger{

  log (message: string){
    console.log(message)
  };
}



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    ProductListComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide:Logger,useClass:ConsoleLogger},

    {provide : PaymentMethod , useClass: BankilyService,multi:true},
    {provide :PaymentMethod ,useClass: MasrviService ,multi:true},
    PayementMethodManagerService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
