import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongslistComponent } from './songslist/songslist.component';

const routes: Routes = [
    {path:'', component:SongslistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongsListRoutingModule { }