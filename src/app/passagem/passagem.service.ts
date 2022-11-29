import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Passagem } from './passagem.interface';

@Injectable({
  providedIn: 'root'
})
export class PassagemService {

  constructor(private http: HttpClient) { }

  getPassagem(id: number): Observable<Passagem> {
    return this.http.get<Passagem>(`${environment.apiUrl}/passagem/${id}`);
  }

  getPassagens(): Observable<Passagem[]> {
    return this.http.get<Passagem[]>(`${environment.apiUrl}/passagem`);
  }

  save(passagem: Passagem): Observable<Passagem> {
    return this.http.post<Passagem>(`${environment.apiUrl}/passagem`, passagem);
  }


  update(passagem: Passagem): Observable<Passagem> {
    return this.http.put<Passagem>(`${environment.apiUrl}/passagem/${passagem.id}`, passagem);
  }

  remove({ id }: Passagem): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/passagem/${id}`);
  }
}
