import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Test {
  returnedData: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }
  firstClick() {
    return console.log('clicked');
  }
  testMethodInConfigServiceTS() {
    return this.http.get('http://127.0.0.1:8000/home/');
  }
  onSubmit(a: any) {
    return this.http.post('http://127.0.0.:4200/api', a)
    //return console.log(a)
    
  }
}
