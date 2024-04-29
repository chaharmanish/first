import { Component, EventEmitter, Output } from '@angular/core';
import {  AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'first',
  standalone:true,
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent  {
  @Output() closePopup = new EventEmitter<void>();

  mainSliderConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    arrows: false,
    dots: false,
    vertical: false
  };
  
  profileSliderConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    dots: true,
    vertical: false // Set to false to slide horizontally
  };
}

  








