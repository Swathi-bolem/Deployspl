import { Injectable } from '@angular/core';
import {CanActivate,ActivatedRoute,RouterStateSnapshot, ActivatedRouteSnapshot, Router} from '@angular/router'
import { UsersService } from './users.service';
@Injectable({
  providedIn: 'root'
})
export class ActivateguardService implements CanActivate {
s:any;
  constructor(private goservice:UsersService, private router:Router) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
   //  this.goservice.getvalid.subscribe((response)=>{
    //  this. s=response;
 // if(this.s){
    return true;
  //}else{
    return false;
 /// }
 // });
}}
