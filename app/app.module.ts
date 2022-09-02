import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule,routingComponents  } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngMaterialModule } from './ang-material/ang-material.module';
import {SongslistService} from './songslist/songslist.service'
import { SongslistComponent } from './songslist/songslist/songslist.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';
import { PlaylistComponent } from './playlist/playlist.component';
import {PlaylistService} from './playlist/playlist.service';
import {UsersService} from 'src/app/users.service';
import { SearchfilterPipe } from './searchfilter.pipe';
import{DirtycheckGuard} from 'src/app/dirtycheck.guard'
import { RouterModule } from '@angular/router';
import { ActivateguardService } from './activateguard.service';

import { ProfileComponent } from './profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { Search2filterPipe } from './search2filter.pipe';

@NgModule({
  declarations:[
    AppComponent,
   routingComponents,
   LoginComponent,
   RegisterComponent,
  SongslistComponent,
  PlaylistComponent,
  SearchfilterPipe,

  ProfileComponent,

  Search2filterPipe,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngMaterialModule,
    FormsModule,
    FlexLayoutModule,
    NgbModule,
    ChartsModule
  ],
  providers: [SongslistService,UsersService,PlaylistService,DirtycheckGuard,ActivateguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
