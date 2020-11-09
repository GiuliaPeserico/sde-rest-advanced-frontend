import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppService } from './app.service';
import { Region } from './types.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  // regions$: Observable<Region[]>;
  regions: Region[];
  topNumber: number;

  constructor(private http: HttpClient, private service: AppService) {}

  ngOnInit(): void {
    this.service.getRegionList().subscribe((regions) => {
      this.regions = regions;
    });
    /*
      here it is called the http request to the api using the http object injected in the constructor
      example: this.http.get<>('/api/charts').toPromise().then(() => {});;
    */
  }
  ngOnDestroy(): void {
    // unsubscribe
  }
  onAscOrder(): void {
    console.log('Call to api asc');
  }
  onDescOrder(): void {
    console.log('Call to api desc');
  }
  onTopNumber(): void {
    console.log(this.topNumber);
  }
}
