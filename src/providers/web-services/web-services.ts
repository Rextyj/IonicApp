import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

/*
  Generated class for the WebServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebServicesProvider {

  url = "https://api.nytimes.com/svc/topstories/v2/";
  apiKey = 'f61fefc7ff3e4ef58c2348c914dea2c9';

  constructor(public http: HttpClient) {
    console.log('Hello WebServicesProvider Provider');
  }

  getNews(sectionName) {
    var address = this.url + sectionName + '.json?api-key=' + this.apiKey;
    return this.http.get(address).pipe(map((response: Response) => response['results']));
  }

}
