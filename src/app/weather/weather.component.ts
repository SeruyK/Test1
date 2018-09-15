import { Component, OnInit } from '@angular/core';
import {fromEvent} from 'rxjs';
import {HttpClient, HttpRequest} from '@angular/common/http';
import { WeatherService } from '../services/weather.service';
import { Observable } from 'rxjs';
import { DataSource} from '@angular/cdk/collections';
import { Weather } from '../models/weather.model';
import * as c3 from 'c3';
import {objectify} from 'tslint/lib/utils';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit  {

  dataSource; // = new WeatherDataSource(this.weatherService);
  displayedColumns = ['time', 'temp', 'wind', 'weather'];
  public  degrees = 12;


  constructor(private weatherService: WeatherService, private  http: HttpClient) {
  }

  ngOnInit() {
    fromEvent(document.getElementById('LoadWeather'), 'click')
      .subscribe(res => this.dataSource = new WeatherDataSource(this.weatherService));
    // ==============================================
    fromEvent(document.getElementById('FindWeather'), 'click')
      .subscribe(res => this.dataSource = new WeatherDataSource2(this.weatherService, this.degrees));
    // ==============================================
    fromEvent(document.getElementById('graph'), 'click')
      .subscribe(res => {
        console.log(this.weatherService.getWeath().subscribe(a => {
                  console.log(a.map(p => p.temp));
          const chart = c3.generate({
            bindto: '#chart',
            data: {
              columns: [
                ['wind'].concat(a.map(p => p.wind)),
                ['temp'].concat(a.map(p => p.temp))
              ]
            }
          });
        }));
      });

  }
}

// =========================================================================================

export class WeatherDataSource extends DataSource<any> {

   constructor(private  weatherService: WeatherService) {
    super();
  }
  connect(): Observable<Weather[]> {
    return this.weatherService.getWeath();
  }
  disconnect() {}
}

// =========================================================================================

export class WeatherDataSource2 extends DataSource<any> {

  degrees: number;
  constructor(private  weatherService, degrees) {
    super();
    this.degrees =  degrees;
  }

  connect(): Observable<Weather[]> {
    console.log(this.degrees);
    return this.weatherService.findWeather(this.degrees);
  }

  disconnect() {}

}
