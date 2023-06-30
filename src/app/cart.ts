import { Injectable } from "@angular/core"


export abstract class Engine {
  abstract version:string
}

export class FirstGenerationEngine extends Engine {
  override version: string =  "G1"

}

export class SecondGenerationEngine extends Engine {
  override version: string =  "G2"
}

@Injectable()
export class Car  {
  constructor(private engine:Engine){}

  engineInfo(){
   return {engine:this.engine.version}
  }
}
