import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';


/*
  Generated class for the ApiNflProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiNflProvider {
  url: string = "http://nfl.com/ajax/scorestrip?season=2018&seasonType=REG&week=1";

  constructor(public http: Http) {
    console.log('Hello ApiNflProvider Provider');
  }

  getSchedule() {
    let headers = new Headers({
      'Content-Type': 'application/json',});;  // let é uma variável "local" usada apenas nesse escopo
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url, options)
  }
}
