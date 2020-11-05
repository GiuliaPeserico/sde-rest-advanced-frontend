import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    /*
      here it is called the http request to the api using the http object injected in the constructor
      example: this.http.get<>('/api/charts').toPromise().then(() => {});;
    */
  }
}
