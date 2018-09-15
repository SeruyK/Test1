import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
// import {Response} from '@angular/http';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CurrencyComponent } from './currency/currency.component';
import { WeatherComponent } from './weather/weather.component';
import { MatTableModule } from '@angular/material';

import {WeatherService} from './services/weather.service';
import {UserService} from './services/user.service';
import {UrlSerializer} from '@angular/router';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    WeatherComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    FormsModule // ,
  //  Response
  ],
  providers: [WeatherService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
