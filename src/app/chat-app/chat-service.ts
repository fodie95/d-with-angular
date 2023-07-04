import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class  ChatService {
 private notifier = new Subject()

 private messages :string [] = []



  get notification () {
    return this.notifier.asObservable()
  }

  private notify() {
    this.notifier.next({})
  }

  send(message:string) {
    this.messages.push(message)
    this.notify()
  }

  getMessages() {
    return this.messages
  }


}
