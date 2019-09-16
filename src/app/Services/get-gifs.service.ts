import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GetGifsService {

  gifUrl: string = 'http://api.giphy.com/v1/gifs/search?q=pokemon&api_key='
  apiKey: string = 'xWD98hijoqG96XnLMn6r3EA2tyIATN22'

  constructor(private http: Http) { }

  getGif() {
    return this.http.get(`${this.gifUrl}${this.apiKey}`)
  }
} 
