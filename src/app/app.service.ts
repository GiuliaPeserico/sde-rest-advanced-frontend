import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CasesPerRegion, Region } from './types.model';

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

  getChartPieUrl(): string {
    return 'http://localhost:8082/charts/pie';
  }
  getChartLineUrl(): string {
    return 'http://localhost:8082/charts/line';
  }
  getMapUrl(): string {
    return 'http://localhost:8082/map';
  }
}
