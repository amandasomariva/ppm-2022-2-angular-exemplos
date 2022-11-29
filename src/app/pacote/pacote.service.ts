import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pacote } from './pacote.interface';

@Injectable({
  providedIn: 'root'
})
export class PacoteService {
  constructor(private http: HttpClient) { }

  getPacote(id: number): Observable<Pacote> {
    return this.http.get<Pacote>(`${environment.apiUrl}/pacote/${id}`);
  }

  getPacotes(): Observable<Pacote[]> {
    return this.http.get<Pacote[]>(`${environment.apiUrl}/pacote`);
  }

  save(pacote: Pacote): Observable<Pacote> {
    return this.http.post<Pacote>(`${environment.apiUrl}/pacote`, pacote);
  }


  update(pacote: Pacote): Observable<Pacote> {
    return this.http.put<Pacote>(`${environment.apiUrl}/pacote/${pacote.id}`, pacote);
  }

  remove({ id }: Pacote): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/pacote/${id}`);
  }
}
