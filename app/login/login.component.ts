import { Component, OnInit, Output,EventEmitter} from '@angular/core';

import { Router } from '@angular/router';
import { UsersService} from '../users.service'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Componentcanactivate } from '../componentcanactivate';
import { PlaylistService } from '../playlist/playlist.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,Componentcanactivate  {
  
profileto:any=[];
login:any;
validuser:boolean=false;
i:any;
users:any=[];
en:boolean=false;
res:boolean=false;

allUsers:any;
 ;

  constructor(public uservice:UsersService,public router:Router,public pservice:PlaylistService,public fbuilder: FormBuilder) { }
  test="hello";
  loginform= new FormGroup({
    uname: new FormControl(''),
    password: new FormControl('')

  });
  ngOnInit(): void {
    
    this.getLatestUser();

        this.loginform=this.fbuilder.group({uname:[ '',[Validators.required,Validators.minLength(6)]],
      password:['',[Validators.required,Validators.minLength(8)]]})
    
  }

  getLatestUser(){
    this.uservice.getAllUsers().subscribe((response)=>{
      this.allUsers=response;
     
    })}
  checkuser(formObj:any){
for(let i=0;i<this.allUsers.length;i++) {


if((this.loginform.get('uname')?.value==this.allUsers[i].email)&&(this.loginform.get('password')?.value==this.allUsers[i].password)){

this.validuser=true;
this.uservice.getvalid(this.validuser);
this.users.push(this.allUsers[i]);
this.router.navigate(['/profile']);
this.uservice.communicate(this.validuser);
this.uservice.sendprofile(this.allUsers[i]);
console.log(this.allUsers[i])
}

} 

  
this.en=true;

}
get (): boolean{
 
  if( this.validuser){
    return true;}
    else{
      return false;
    }
  }
}




