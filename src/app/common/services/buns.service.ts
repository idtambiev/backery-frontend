
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '@interfaces/result.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BunsService {

  url = environment.url+'api/buns'
  constructor(private http: HttpClient) { }

  getAllBuns(): Observable<any>{
    return this.http.get(this.url);
  }

  createBunsList(count: number): Observable<Result>{
    return this.http.get<Result>(this.url+'/create-new-buns', {
      params: {
      count
    }})
  }
}
