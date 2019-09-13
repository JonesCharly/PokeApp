import { Injectable } from '@angular/core';
import { Pokemon } from '../Models/pokemon';
// import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs'
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  baseSpriteUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private http : Http) {}

  /*
   * Method that fetches data from
   * the Pokémon API.
   */

  getPokemon(offset: number,) {
    return this.http.get(`${this.baseUrl}?offset={offset}&limit=151`).toPromise()
      .then(res => res.json().results)
      .then(items => items.map((item, index) => {

        const id: number = index + offset + 1

        return {
          name: item.name,
          sprite: `${this.baseSpriteUrl}${id}.png`,
          id
        }
      }))
  }
}
