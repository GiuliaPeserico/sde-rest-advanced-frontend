import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CasesPerRegion, Region } from './types.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>('http://localhost:8081/regions');
  }

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

  getChartBarUrl(d: number, m: number, y: number): string {
    return 'http://localhost:8082/charts/bar?d=' + d + '&m=' + m + '&y=' + y;
  }
  getChartLineUrl(id: number, m: number, y: number): string {
    return 'http://localhost:8082/charts/line?id=' + id + '&m=' + m + '&y=' + y;
  }
  getMapUrl(d: number, m: number, y: number): string {
    return 'http://localhost:8082/map?d=' + d + '&m=' + m + '&y=' + y;
  }
}
