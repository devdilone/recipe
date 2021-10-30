import { Component, OnInit } from '@angular/core';
// import breakfast450 from '../../assets/img/home-carousel/';
// import image from 'src/assets/img/home-carousel/';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.scss']
})
export class HomeCarouselComponent implements OnInit {

  // mapping example, brings up example pics for carousel
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
  testImgLocation = '/assets/img/home-carousel/dessert600.jpg';
  images =['breakfast','dessert','healthy'].map((n) => `/assets/img/home-carousel/${n}600.jpg`);
  imageObject: Array<object> = [
    {
    image: '/assets/img/home-carousel/dessert600.jpg',
    thumbImage: '/assets/img/home-carousel/dessert600.jpg',
    alt: 'alt of image',
    title: 'title of image'
},
{
  image: '/assets/img/home-carousel/dessert600.jpg',
  thumbImage: '/assets/img/home-carousel/dessert600.jpg',
  alt: 'alt of image',
  title: 'title of image'
},
{
  image: '/assets/img/home-carousel/dessert600.jpg',
  thumbImage: '/assets/img/home-carousel/dessert600.jpg',
  alt: 'alt of image',
  title: 'title of image'
},
{
  image: '/assets/img/home-carousel/dessert600.jpg',
  thumbImage: '/assets/img/home-carousel/dessert600.jpg',
  alt: 'alt of image',
  title: 'title of image'
}, 
{
  image: '/assets/img/home-carousel/dessert600.jpg',
  thumbImage: '/assets/img/home-carousel/dessert600.jpg',
  alt: 'alt of image',
  title: 'title of image'
}, 
{
  image: '/assets/img/home-carousel/dessert600.jpg',
  thumbImage: '/assets/img/home-carousel/dessert600.jpg',
  alt: 'alt of image',
  title: 'title of image'
}, 
{
  image: '/assets/img/home-carousel/dessert600.jpg',
  thumbImage: '/assets/img/home-carousel/dessert600.jpg',
  alt: 'alt of image',
  title: 'title of image'
}, 
{
  image: '/assets/img/home-carousel/dessert600.jpg',
  thumbImage: '/assets/img/home-carousel/dessert600.jpg',
  alt: 'alt of image',
  title: 'title of image'
}, 
{
  image: '/assets/img/home-carousel/dessert600.jpg',
  thumbImage: '/assets/img/home-carousel/dessert600.jpg',
  alt: 'alt of image',
  title: 'title of image'
}, 
{
  image: '/assets/img/home-carousel/dessert600.jpg',
  thumbImage: '/assets/img/home-carousel/dessert600.jpg',
  alt: 'alt of image',
  title: 'title of image'
}, 
];
  constructor() { }

  ngOnInit(): void {
    console.log(this.images);
  }

}
