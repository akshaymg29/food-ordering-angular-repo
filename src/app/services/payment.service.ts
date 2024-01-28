import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private tokenKey = 'authToken';
  constructor(private _http: HttpClient) { }

  year = ['2028', '2027', '2026', '2025', '2024', '2023'];
  mnth = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  postPayment(data: any): Observable<any> {
    return this._http.post('http://localhost:8000/api/v1/payment', data, this.httpOptions);
  }

  getYearList(): Array<string> {
    return this.year;
  }

  getMnthList(): Array<string> {
    return this.mnth;
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": "Bearer " + localStorage.getItem(this.tokenKey)!,
    }),
  };
}
