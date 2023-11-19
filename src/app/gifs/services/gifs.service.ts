import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

private _tagHistory: string[] = [];
private apiKey: string = "S0jzODj2AtwwRwDmaL4EkDxJHaYmsq3E";
private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

constructor( private http: HttpClient) { }

get tagsHistory(){
  return [...this._tagHistory];
}

//=============================================
private organizeHistory (tag: string){
  tag = tag.toLocaleLowerCase();

  if( this._tagHistory.includes(tag)){
    this._tagHistory = this._tagHistory.filter( (oldTag => oldTag !== tag));
  }

  this._tagHistory.unshift( tag );
  this._tagHistory = this._tagHistory.splice(1, 10);
}



//================================================
 searchTag( Tag: string) :void{
  if(Tag.length === 0) return;
  this.organizeHistory(Tag);

  const params = new HttpParams()
  .set('api_key', this.apiKey)
  .set('limit', 10)
  .set('q', Tag);


  this.http.get(`${ this.serviceUrl }/search`, { params })
  .subscribe( resp => {

    console.log(resp);
  })
}
}
