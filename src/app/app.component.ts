import { Component, Inject, SkipSelf } from '@angular/core';
import { Car, Engine, FirstGenerationEngine, SecondGenerationEngine } from './cart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[
    {provide:Engine ,useFactory:()=> new FirstGenerationEngine()},
    Car
  ]

})
export class AppComponent {
  title = 'talk';

  constructor(private engine :Engine,public car :Car){
   console.log(engine)


  }
}
