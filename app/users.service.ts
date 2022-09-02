import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  getgo() {
    throw new Error('Method not implemented.');
  }
login:any;
  constructor(private _http:HttpClient) { }
sendValid=new BehaviorSubject<boolean>(false)
public issure =this.sendValid.asObservable();
sendProfile=new BehaviorSubject<string>("Default Data");
public share = this.sendProfile.asObservable();
x:boolean=false;
sendalid=new BehaviorSubject<boolean>(true);
public out =this.sendalid.asObservable();
  createUser(user:any){
 return this._http.post("http://localhost:3000/users", user);
  }
getAllUsers(){
  return this._http.get("http://localhost:3000/users")
}
updateuser(user:any){
  return this._http.put("http://localhost:3000/users/"  +user.id, user )
}
communicate(sng:boolean){
  this.sendValid.next(sng);
}
logout(sg:boolean){
  this.sendalid.next(sg);
    }
    sendprofile(profile:any){
      this.sendProfile.next(profile);
    }
    getvalid(valid:boolean){
      this.x=valid;
     if(valid){
      this.isloggedin(); 
      return true;
       
     }else{
       return false;
     };
    }
    isloggedin(){
      if(this.x){
      return true;}else{
        return false;
      }
    }
}
