import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [NgbCarouselConfig]

})
export class AboutComponent implements OnInit {

  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig , private route:Router) {
    // 
    config.interval = 3000;
    config.keyboard = true;
    config.pauseOnHover = true;
    config.wrap = true;  
  }
test="hello";
  ngOnInit(): void {
  }

gotoplaylists(){
  this.route.navigate(['/playlist'])
}
gotosongs(){
this.route.navigate(['/songslist'])
}
gotoprofile(){
this,this.route.navigate(['/profile'])
}
}
