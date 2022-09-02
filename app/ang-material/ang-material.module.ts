import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card'
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
const MaterialComponents =[MatMenuModule,MatSelectModule,MatToolbarModule,MatExpansionModule,MatCheckboxModule,MatGridListModule,MatButtonModule,MatInputModule,MatFormFieldModule,MatCardModule,MatTabsModule]
@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class AngMaterialModule { }
