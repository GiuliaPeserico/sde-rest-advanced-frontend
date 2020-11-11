import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';
import { CasesPerRegion, Region } from './types.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  ranking: CasesPerRegion[];
  topNumber: number;

  chartBarUrl: string;
  chartLineUrl: string;
  mapUrl: string;
  subs: Subscription[] = [];

  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.onGetRanking();

    this.chartBarUrl = this.service.getChartBarUrl();
    this.chartLineUrl = this.service.getChartLineUrl();
    // this.mapUrl = this.service.getMapUrl();
  }
  ngOnDestroy(): void {
    this.subs.forEach((element) => {
      element.unsubscribe();
    });
  }
  onAscOrder(): void {
    this.subs.push(
      this.service.getRenkingRegionByOrder('asc').subscribe((ranking) => {
        this.ranking = ranking;
      })
    );
  }
  onDescOrder(): void {
    this.subs.push(
      this.service.getRenkingRegionByOrder('desc').subscribe((ranking) => {
        this.ranking = ranking;
      })
    );
  }
  onGetRanking(): void {
    this.subs.push(
      this.service.getRenkingRegion(this.topNumber).subscribe((ranking) => {
        this.ranking = ranking;
      })
    );
  }
}
