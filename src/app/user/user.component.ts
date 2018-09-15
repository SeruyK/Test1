import { Component, OnInit } from '@angular/core';
import {fromEvent} from 'rxjs';
import {HttpClient, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataSource} from '@angular/cdk/collections';
import { User } from '../models/user.model';
import {UserService} from '../services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['name', 'email', 'phone', 'company']
  constructor(private userService: UserService, private  http: HttpClient) { }

  ngOnInit() {
  }

}



export class UserDataSource extends DataSource<any> {
  constructor(private  userService: UserService) {
    super();
  }

  connect(): Observable<User[]> {
    return this.userService.getUser();
  }

  disconnect() {}

}
