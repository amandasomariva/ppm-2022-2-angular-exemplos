import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from './cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http: HttpClient) { }

  getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${environment.apiUrl}/cliente/${id}`);
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${environment.apiUrl}/cliente`);
  }

  save(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${environment.apiUrl}/cliente`, cliente);
  }


  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${environment.apiUrl}/cliente/${cliente.id}`, cliente);
  }

  remove({ id }: Cliente): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/cliente/${id}`);
  }
}
