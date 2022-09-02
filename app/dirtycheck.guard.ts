import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from 'src/app/component-can-deactivate';

import { UsersService } from './users.service';
@Injectable({
  providedIn: 'root'
})
export class DirtycheckGuard implements CanActivate, CanDeactivate<ComponentCanDeactivate>, CanLoad {

 constructor(private goservice:UsersService){}
  canActivate() {
    //return true;
    
    
if(this.goservice.isloggedin()){
return true;
}else{
  return false;
}
  }
  canDeactivate(
    component: ComponentCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if( component.canDeactivate()){
       
        return true;
      }else{
        return confirm('There are some unsaved changes.Are you sure you want to leave page?' );
      }return component.canDeactivate();
    
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
