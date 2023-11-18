import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-Page.component';
import { ShearchBoxComponent } from './components/shearch-box/shearch-box.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomePageComponent,
    ShearchBoxComponent
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
