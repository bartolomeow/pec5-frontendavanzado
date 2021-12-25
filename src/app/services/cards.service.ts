import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card.interface';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor(private http: HttpClient) {}

  get50Cards(): Observable<any> {
    return this.http.get('https://api.pokemontcg.io/v2/cards?pageSize=100');
  }

  getCardById(id: string): Observable<any> {
    return this.http.get<Card>('https://api.pokemontcg.io/v2/cards/' + id);
  }
}
