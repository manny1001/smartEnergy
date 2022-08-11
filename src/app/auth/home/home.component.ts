import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  imageObject: Array<object> = [
    {
      image: 'assets/SliderImage1.jpeg',
      thumbImage: 'assets/SliderImage1.jpeg',
      alt: 'Image alt',
    },
    {
      image: 'assets/SliderImage2.jpeg',
      thumbImage: 'assets/SliderImage2.jpeg',
      alt: 'Image alt',
    },
    {
      image: 'assets/SliderImage3.jpeg',
      thumbImage: 'assets/SliderImage3.jpeg',
      alt: 'Image alt',
    },
    {
      image: 'assets/SliderImage4.jpeg',
      thumbImage: 'assets/SliderImage4.jpeg',
      alt: 'Image alt',
    },
    {
      image: 'assets/SliderImage5.jpeg',
      thumbImage: 'assets/SliderImage5.jpeg',
      alt: 'Image alt',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
