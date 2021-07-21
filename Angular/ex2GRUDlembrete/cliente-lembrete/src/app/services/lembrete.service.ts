import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';
import { Lembrete } from '../interfaces/lembrete';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor(private http: HttpClient) { }

  getListarLembretes(): Observable<Lembrete[]> {
    const url = '${environment.lembrete}/lembrete';
    return this.http.get<Lembrete[]>(url);
  }
  getLembrete(id: number): Observable<Lembrete> {
    const url = '${environment.lembreteApiUrl}/lembrete/';
    return this.http.post<Lembrete>(url, lembrete);
  }
  addLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const url = '${environment.lembreteApiUrl}/lembrete/';
    return this.http.post<Lembrete>(url, lembrete);
  }
  atualizaLembrete(lembrete: Lembrete): Observable<Lembrete> {
    const url = `${environment.lembretesApiUrl}/lembrete/${lembrete.id}`;
    return this.http.put<Lembrete>(url, lembrete);
  }
  deletaLembrete(id: number): Observable<Lembrete> {
    const url = `${environment.lembretesApiUrl}/lembrete/${id}`;
    return this.http.delete<Lembrete>(url);
  }
