import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { WeatherService } from '../services/weather.service';
import { City } from '../models/city';

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.css']
})
export class AddcityComponent implements OnInit{

  form!:FormGroup
  country!:string
  city!:string
  imageUrl!:string
  cityObj!:City

  constructor(private formBuilder:FormBuilder, private router:Router, private weatherSvc:WeatherService){}

  private createForm():FormGroup {
    return this.formBuilder.group({
      countryName: this.formBuilder.control(''),
      city: this.formBuilder.control(''),
      imageUrl: this.formBuilder.control('')
    })
  }

  ngOnInit(): void {
      this.form = this.createForm()
  }

  add(){
    this.country = this.form?.value['countryName']
    this.city = this.form?.value['city']
    this.imageUrl = this.form?.value['imageUrl']
    this.cityObj = {country:this.country, city:this.city, imageUrl:this.imageUrl}
    this.weatherSvc.addCity(this.cityObj)
    this.router.navigate(['/'])
  }

}
