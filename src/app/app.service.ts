import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CasesPerRegion } from './types.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getRenkingRegion(n: number): Observable<CasesPerRegion[]> {
    if (n) {
      return this.http.get<CasesPerRegion[]>(
        'http://localhost:8082/ranking?n=' + n
      );
    } else {
      return this.http.get<CasesPerRegion[]>('http://localhost:8082/ranking');
    }
  }
  getRenkingRegionByOrder(str: string): Observable<CasesPerRegion[]> {
    return this.http.get<CasesPerRegion[]>(
      'http://localhost:8082/ranking?ord=' + str
    );
  }

  getChartBarUrl(): string {
    return 'http://localhost:8082/charts/bar';
  }
  getChartLineUrl(): string {
    return 'http://localhost:8082/charts/line?id=5;d=1;m=11;y=2020';
  }
  getMapUrl(): string {
    return 'http://localhost:8082/map';
  }
}
