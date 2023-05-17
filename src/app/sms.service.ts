import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SMS } from './sms-models/sms.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SmsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllSMS(): Observable<SMS[]> {
    return this.http.get<SMS[]>(`${this.apiUrl}/allSms`);
  }

  getSMS(id: string): Observable<SMS> {
    return this.http.get<SMS>(`${this.apiUrl}/sms?id=${id}`);
  }
}
