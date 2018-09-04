import { Component, OnInit, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent  implements OnInit  {
  title = 'Find developer';

  public technology: string[];
  // public http: HttpClient;
  constructor(private  http: HttpClient) {}

  ngOnInit() {
    // this.technology = ['C#', 'JavaScript', 'PHP', 'nnn'];
    this.technology = ['GBP', 'PLN', 'CAD', 'UAH'];
}

  onClick() {
    console.log('--------------------------------');
  //  this.http.get('http://data.fixer.io/api/latest?access_key=225b4c9ad28f6cf29e28ad308ebef0d6')
  //    .subscribe(data => {
  //      console.log(data);
  //    });
    this.http.get('http://data.fixer.io/api/latest?access_key=225b4c9ad28f6cf29e28ad308ebef0d6')
       .subscribe(a => {console.log(a);
      });
  }

}
