import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { DirtycheckGuard } from './dirtycheck.guard';

import { LoginComponent } from './login/login.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { ProfileComponent } from './profile/profile.component';

import { RegisterComponent } from './register/register.component';
import { SongslistComponent } from './songslist/songslist/songslist.component';



const routes: Routes = [
  
 
  {path:'about', component:AboutComponent},
  {path:'login', component:LoginComponent},
  {path:'profile',component:ProfileComponent}, 
  {path:'register', component:RegisterComponent,canDeactivate:[DirtycheckGuard]},
  {path:'playlist',component:PlaylistComponent,canDeactivate:[DirtycheckGuard]},
  {path:'songslist', component:SongslistComponent,canDeactivate:[DirtycheckGuard],},
  {path:'songslist',loadChildren:()=>import ('./songslist/songslist.module').then(m=>m.SongslistModule)},
  
  
 
  {path:'**',component:AboutComponent},
  { path: '',   redirectTo: '/about', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash:true,
    anchorScrolling:'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[AboutComponent,ProfileComponent,LoginComponent,RegisterComponent,SongslistComponent,PlaylistComponent]