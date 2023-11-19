import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-Page.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { ShearchBoxComponent } from './components/shearch-box/shearch-box.component';
import { GiftCardComponent } from './components/giftCard/giftCard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomePageComponent,
    CardListComponent,
    ShearchBoxComponent,
    GiftCardComponent
  ],
  exports: [
    HomePageComponent
  ]
})
export class GifsModule { }
