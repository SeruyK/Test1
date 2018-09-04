import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})



export class CurrencyComponent implements OnInit {

  amount = 1;
  amount2 = 1;
  currency = 'USD';
  currency2 = 'USD';

  currencys = []; // [{'USD': 0.454 } , {'EUR' : 1 } , {'PLN' : 2.33 }, {'UAH' : 1.33 }];


  constructor(private  http: HttpClient) {}

  ngOnInit() {

   this.http.get('http://data.fixer.io/api/latest?access_key=225b4c9ad28f6cf29e28ad308ebef0d6')
      .subscribe((a: Curre) => {
        this.currencys = Object.keys(a.rates);
      } );

    console.log(this.currencys);
  }
    onChange() {
      this.http.get('http://data.fixer.io/api/latest?access_key=225b4c9ad28f6cf29e28ad308ebef0d6&symbols=' + this.currency + ',' + this.currency2 + ',EUR')
      .subscribe((a: Curre) => {
        this.amount2 = this.amount * (a.rates[this.currency2] / a.rates[this.currency]);
      });


  }
  onChange2() {
    this.http.get('http://data.fixer.io/api/latest?access_key=225b4c9ad28f6cf29e28ad308ebef0d6&symbols=' + this.currency + ',' + this.currency2 + ',EUR')
      .subscribe((a: Curre) => {
        this.amount = this.amount2 * (a.rates[this.currency] / a.rates[this.currency2]);
     });


  }


}

export  interface  Curre {
  rates: JSON;

}
