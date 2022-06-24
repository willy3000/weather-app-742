import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  weatherData: any;
  city = "Nairobi";
  current: any;

  @Output() cityname: EventEmitter<string> = new EventEmitter()

  ngOnInit(){
    // navigator.geolocation.getCurrentPosition(this.success);
    this.getWeather()
  }

  constructor(private service: ApiService){}


  success(succ:any){
    console.log(succ)
  }


  getWeather(){
    return this.service.getData(this.city).subscribe((data)=>{
      this.weatherData=data
      console.log(this.weatherData.location.name)
    })
    
  }

}
