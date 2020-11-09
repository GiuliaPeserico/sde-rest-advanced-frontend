import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Region } from './types.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getRegionList(): Observable<Region[]> {
    return of([
      {
        id: 0,
        name: 'Veneto',
        lat: 0,
        long: 1,
      },
      {
        id: 1,
        name: 'Trentino Alto Adige',
        lat: 1,
        long: 2,
      },
      {
        id: 2,
        name: 'Lombardia',
        lat: 1,
        long: 2,
      },
    ]);
  }
}
