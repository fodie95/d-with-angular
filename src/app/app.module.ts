import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Car, Engine, FirstGenerationEngine } from './cart';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],

  providers:[
    {provide:Engine ,useClass:FirstGenerationEngine},
    Car
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
