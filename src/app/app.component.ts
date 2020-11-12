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
  regions: Region[];
  topNumber: number;
  selectedRegion = 1;
  selectedLineChartDate = '2020-11-01';
  selectedBarChartDate = '2020-11-01';
  selectedMapDate = '2020-11-01';

  chartBarUrl: string;
  chartLineUrl: string;
  mapUrl: string;
  subs: Subscription[] = [];

  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.onGetRanking();

    this.subs.push(
      this.service.getRegions().subscribe((regions) => {
        this.regions = regions;
      })
    );
    const strArrayBar = this.splitDate(this.selectedBarChartDate);
    this.chartBarUrl = this.service.getChartBarUrl(
      strArrayBar[0],
      strArrayBar[1],
      strArrayBar[2]
    );
    const strArrayLine = this.splitDate(this.selectedLineChartDate);
    this.chartLineUrl = this.service.getChartLineUrl(
      this.selectedRegion,
      strArrayLine[1],
      strArrayLine[2]
    );
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
  onSelectRegion(): void {
    const array = this.splitDate(this.selectedLineChartDate);
    this.chartLineUrl = this.service.getChartLineUrl(
      this.selectedRegion,
      array[1],
      array[2]
    );
  }
  onSelectLineChartDate(): void {
    const array = this.splitDate(this.selectedLineChartDate);
    this.chartLineUrl = this.service.getChartLineUrl(
      this.selectedRegion,
      array[1],
      array[2]
    );
  }
  onSelectBarChartDate(): void {
    const array = this.splitDate(this.selectedBarChartDate);
    this.chartBarUrl = this.service.getChartBarUrl(
      array[0],
      array[1],
      array[2]
    );
  }
  onSelectMapDate(): void {
    const array = this.splitDate(this.selectedMapDate);
    this.mapUrl = this.service.getMapUrl(array[0], array[1], array[2]);
  }

  private splitDate(str: string): number[] {
    const strArray = str.split('-');
    const numArray = [];
    numArray[0] = parseInt(strArray[2], 10);
    numArray[1] = parseInt(strArray[1], 10);
    numArray[2] = parseInt(strArray[0], 10);
    return numArray;
  }
}
