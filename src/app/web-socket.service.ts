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
    let e: UIEvent = new UIEvent(sender, content);
    this.subject.next(e);
  }
  
  public connect = () => {
    return this.subject.subscribe();
  }
  
  constructor() { 
    this.subject = webSocket('ws://localhost:21040');
  }
}
