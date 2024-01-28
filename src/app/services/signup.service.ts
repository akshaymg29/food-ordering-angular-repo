import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http : HttpClient) { }

  public register(data: any):Observable<any>{
    return this.http.post('http://localhost:8000/api/v1/add', data);
  }
}
