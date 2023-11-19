import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

private _tagHistory: string[] = [];

constructor() { }

get tagsHistory(){
  return [...this._tagHistory];
}

private organizeHistory (tag: string){
  tag = tag.toLocaleLowerCase();

  if( this._tagHistory.includes(tag)){
    this._tagHistory = this._tagHistory.filter( (oldTag => oldTag !== tag));
  }

  this._tagHistory.unshift( tag );
  this._tagHistory = this._tagHistory.splice(1, 10);
}

searchTag( Tag: string) : void{
  if(this.tagsHistory.length){}

  this.organizeHistory(Tag);

  this._tagHistory.unshift(Tag);
}
}
