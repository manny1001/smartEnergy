import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  imageObject: Array<object> = [
    {
      video: 'assets/video/movie.mp4', // MP4 Video url
    },
    {
      video: 'assets/video/movie2.mp4',
      posterImage: 'assets/img/slider/2_min.jpeg', //Optional: You can use this key if you want to show video poster image in slider
      title: 'Image title',
    },
    {
      image: 'assets/img/slider/1.jpg',
      thumbImage: 'assets/img/slider/1_min.jpeg',
      alt: 'Image alt',
    },
    
  ];
  constructor() {}

  ngOnInit(): void {}
}
