import { Component, OnInit } from '@angular/core';
import {UsersService } from '../users.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {CanDeactivate, Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  allUsers:any;
 leave:boolean=true;
  constructor(private route:Router,private formBuilder: FormBuilder,private usersservice:UsersService) { }
  regForm = new FormGroup({
    email: new FormControl(''),
   password:new FormControl(''),
   firstname:new FormControl(''),
   lastname:new FormControl(''),
   mobilenumber:new FormControl(''),
   location:new FormControl('')

  });
  ngOnInit(): void {
    this.getLatestUser();

    this.regForm=this.formBuilder.group({
      email:[ '',[Validators.required,Validators.minLength(6)]],
      password:['',[Validators.required,Validators.minLength(8)]],
      firstname:['',[Validators.required,Validators.minLength(4)]],
lastname:['',[Validators.required,Validators.minLength(4)]],
mobilenumber:['',[Validators.required,Validators.pattern('^[0-9]*'),Validators.minLength(10),Validators.maxLength(12)]],
location:['',[Validators.required,Validators.minLength(5)]]
    })
      
  }
 submit(formObj:any){
  this.usersservice.createUser(formObj).subscribe((response)=>{
    this.getLatestUser();
    this.leave=false;
   this.route.navigate(['login'])
console.log(this.regForm.value);
 })
 }
getLatestUser(){
  this.usersservice.getAllUsers().subscribe((response)=>{
    this.allUsers=response;
   
  })}
  canDeactivate (): boolean{
 
    if( (this.regForm.touched&&this.regForm.dirty &&this.regForm.invalid)||(this.leave&&this.regForm.valid)){
      return false;}
      else{
        return true;
      }
    }
}