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
    image: 'https://edamam-product-images.s3.amazonaws.com/web-img/c7b/c7bec34abe4f37580a4b5ffec912a956.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIBBjFtOiv9AsptQxPoxkTaCglo6xMSxXjCtz0tJTWiTDAiAfVo2JNh63w82LffJxN4ejVM9vlaQqSXTUuoSL4FJr6Sr6Awh2EAAaDDE4NzAxNzE1MDk4NiIM3Bcx8hYxLsB%2BdGdcKtcDnxta%2BbJxACQ7Ro1uVnjs%2FCn8Jky0qFb3VYLN%2BWIizPPLSqeEUAWxNIx4qq%2F29QGXwBsZ9Lq6mo7yU4Nuga%2Btol1szkKpGQqu27F32B1VFANbtVUzBBEsHBRE6zXxtyxMErucYr95uxfE99LQehXMFoNyk0T%2Fvzc7FdUArnAJ%2BZEIx0WHrCHwylyB7ni%2FUojPOvwkPgkJlakYklXgtroD6JTj9ez6LZ2t8H4D2%2Fi45o%2FuW3apoEFpOvGBcHG6nLLDuFm1MYOEG4KAf%2B0lHGgJs56%2FyCu%2BMm1TtiAE5aVlMy12JPxTUxZgnPUTJLTkfW5GAOvMCIRPii7OnMentA%2BPRhZd7ZePx%2BR%2FElPScdyVfkRMyM5pWRQhuyt9l8C%2Bz4xSsk%2BQB2iFGfA%2FVuWmJobp3sPjPQRkorN9X5QyWlXU0t9KdavZeBHEyXvTprKb7rk%2F%2BFe6mrpI%2FOX3ZP7BppWIi1wLomlD2FREt4OYbAr2B0lDgbmReAz6%2F2YOKjBI5%2BvctqPpxy3BGJZAui5pbJIQrwIdF3ml1tIycvnKGYjo%2B3lJHCNi9RVTteOpfdMxmdfXmKl33YwD4m1D1En6fL%2Baz6L56IBcdy8g%2BsOGrecTAQ3ru5NlK5l0MKqr4JIGOqYBTmuw8ry25aswiAJU32FWq5lLJrTrItXojfjJHmhxijweV%2F4yt2Us%2BmXLFH7AIB2M%2BkaFfaGRHl8%2F3OlTeLNB6kycVoMOzkEXF1h%2FsybjgVfc%2BYWGrigxMtLeGWJ38IazibJnCAIsd%2Folw7LwsfO4%2BbYHEE8UkhWUlMUbEUzIbR6EYYD%2BQ00BNCCCtd3dkyEo%2FaDxgP2DjRqQrj6d9xKfwTFvxmQGTw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220414T140900Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFKWQ2MCF7%2F20220414%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=92d4d77a872694538ac6bdcbb0061a568e8f4d9a494686f8ef1dfd509731ca80',
    thumbImage: '/assets/img/home-carousel/dessert600.jpg',
    alt: 'alt of image',
    title: 'remote image'
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
