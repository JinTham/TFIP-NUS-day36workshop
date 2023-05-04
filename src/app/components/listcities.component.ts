import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { CitiesRepository } from '../services/cities.repo';

@Component({
  selector: 'app-listcities',
  templateUrl: './listcities.component.html',
  styleUrls: ['./listcities.component.css']
})
export class ListcitiesComponent implements OnInit{
  cities:any
  constructor(private weatherSvc:WeatherService, private citiesRepo:CitiesRepository){}

  async ngOnInit(){
    //this.weatherSvc.sortCities()
    //this.cities = this.weatherSvc.countries;
    this.cities = await this.citiesRepo.getAllCities()
  }
}
