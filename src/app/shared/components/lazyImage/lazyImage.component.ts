import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazyImage',
  templateUrl: './lazyImage.component.html'
})
export class LazyImageComponent implements OnInit{

  constructor() { }
  ngOnInit(): void {
    if(!this.url)  throw new Error('Method not implemented.');
  }

  public hasLoaded: boolean = false;

  @Input()
  public url!: string;

  @Input()
  public alt: string = "";

  onLoad(){
    console.log("image loaded");
    this.hasLoaded = true;
  }
}
