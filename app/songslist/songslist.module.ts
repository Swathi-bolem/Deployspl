import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongslistComponent } from './songslist/songslist.component';
import {SongslistService} from './songslist.service'
import { FormsModule } from '@angular/forms';
import { SongsListRoutingModule } from './songslist-routing.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
  SongsListRoutingModule,
  ],
  providers:[SongslistService]
})
export class SongslistModule { }
