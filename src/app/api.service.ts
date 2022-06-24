import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  getData(city:string){
    return this.http.get( "http://api.weatherapi.com/v1/current.json?key=6bf92730a8694be5a80102853222406&q="+city+"&aqi=no"
    )
  }

}
