
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BunsService {

  url = environment.url+'api'
  constructor(private http: HttpClient) { }

  getAllBuns(): Observable<any>{
    return this.http.get(this.url+'/buns');
  }
}
