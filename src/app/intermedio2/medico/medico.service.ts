import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(public http: HttpClient) { }

  getMedico(): Observable<any> {
    return this.http.get('...');
  }

}
