import { Component,OnInit,EventEmitter } from '@angular/core';

import {Router} from '@angular/router';
import { UsersService} from 'src/app/users.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent {
  
  mess:any;
  logout:any;
constructor(private router:Router, private uservice:UsersService){}

ngOnInit(): void {
  this.uservice.sendValid.subscribe((message)=>{

this.mess=message;
  });
}
onlogout(e:any){
  this.logout=false;
  this.mess=false;
  this.uservice.logout(this.logout);
  this.router.navigate(['/about']);
 }
 
}



