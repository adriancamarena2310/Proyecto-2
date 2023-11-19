import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gift-Card',
  templateUrl: './giftCard.component.html'
})
export class GiftCardComponent implements OnInit {
  constructor() { }

  @Input()
  public gif!: Gif;

  ngOnInit(): void {
    if( !this.gif ) throw new Error('Gif property is required.');
  }


  }


