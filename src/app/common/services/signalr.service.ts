import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  hubConnection: HubConnection | undefined;
  url = environment.url

  constructor(private http: HttpClient){}

  public startConnection = () => {
    this.hubConnection = new HubConnectionBuilder()
        .withUrl(this.url+'buns')
        .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addTransferDataListener = () => {
    this.hubConnection?.on('transferchartdata', (data) => {
      console.log(data);
    });
  }
}
