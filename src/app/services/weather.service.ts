import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Weather } from '../models/weather.model';
import { map } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import {a} from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private serviceUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=Lviv,' +
    'ua&units=metric&lang=ua&appid=38da3347d6a792ae46c080200e8c20f2';

  constructor(private http: HttpClient) { }

  getWeath(): Observable<Weather[]>  {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=Lviv,ua&units=metric&lang=ua&appid=38da3347d6a792ae46c080200e8c20f2').pipe(map(data => {
      const list = data['list'];
      return list.map(weather => {
        return {dt: weather.dt,
          temp: weather.main.temp,
          dt_txt: weather.dt_txt,
          wind: weather.wind.speed,
          weather: weather.weather[0].main};
      }
      );
    }));
  }

  findWeather(degrees): Observable<Weather[]> {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=Lviv,ua&units=metric&lang=ua&appid=38da3347d6a792ae46c080200e8c20f2').pipe(map(data => {
      const list = data['list'];
      return list.map(weather => {
          return {dt: weather.dt,
            temp: weather.main.temp,
            dt_txt: weather.dt_txt,
            wind: weather.wind.speed,
            weather: weather.weather[0].main};
        }
      ).filter(item => item.temp < degrees);
    }));

    }
    // return this.http.get<Weather[]>(this.serviceUrl);


}
