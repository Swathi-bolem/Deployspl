import { Component, OnChanges, OnInit } from '@angular/core';
import { UsersService} from 'src/app/users.service'
import {PlaylistService} from 'src/app/playlist/playlist.service'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public pservice:PlaylistService,public uservice:UsersService) { }
details:any;
allusers:any;
showsave:boolean=true;
detobj={
  email:'',
  password:'',
  firstname:'',
  lastname:'',
  mobilenumber:'',
  location:''
}
test="hello";
  ngOnInit(): void {
  this.getusers();
    this.uservice.share.subscribe(message=>{
      this.details=message;
    
        });
  }
 getusers(){    this.uservice.getAllUsers().subscribe((response)=>{
      this.allusers=response
    });
    
  
 }
  edit(detail:any){
   this.showsave=!this.showsave;
   this.detobj=detail;
  }
  savechanges(){
    this.uservice.updateuser(this.detobj).subscribe(()=>{
      this.getusers();
    
    })
  }
}