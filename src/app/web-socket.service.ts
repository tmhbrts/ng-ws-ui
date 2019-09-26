import { Injectable } from '@angular/core';
import { WebSocketSubject, webSocket } from 'rxjs/websocket';
import { UIEvent } from '@wss/ui-event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private subject: WebSocketSubject<UIEvent>;

  public send = (sender: string, content: string) => {
    const e: UIEvent = new UIEvent(sender, content);
    this.subject.next(e);
  }

  public connect = () => {
    return this.subject.subscribe(
      (e: UIEvent) => console.log('message received: ' + e.content),
      err => console.log(err),
      () => console.log('complete')
    );
  }

  constructor() {
    this.subject = webSocket('ws://localhost:21040');
  }
}
