import { Component } from '@angular/core';
import { SignalRService } from '@services/signalr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Backery';

  constructor(private signalRService: SignalRService){

  }

  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addTransferDataListener();
    // this.startHttpRequest();
    //this.signalRService.startHttpRequest();
  }
}
