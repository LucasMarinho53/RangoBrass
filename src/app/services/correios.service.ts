import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class CorreiosService {

  constructor(private http: HttpClient) { }

  getEndereco(cep:string): Observable<Cliente> {
    return this.http.get<Cliente>(`${environment.correiosWS}/${cep}/json/`);
  }
}
