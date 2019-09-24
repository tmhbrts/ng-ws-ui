import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './web-socket.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-ws-ui';

  ngOnInit() {
    this.webSocket.connect();
  }

  constructor(private webSocket: WebSocketService) { }
}
