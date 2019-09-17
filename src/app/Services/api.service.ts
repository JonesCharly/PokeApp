import { Injectable } from '@angular/core';
import { Pokemon } from '../Models/pokemon';
// import 'rxjs/add/operator/toPromise';
import { mergeMap, map, zip, concatMap, concatAll } from 'rxjs/operators'
import { Http } from '@angular/http';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  baseSpriteUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private http: Http) { }

  /*
   * Method that fetches data from
   * the Pokémon API.
   */

  getSecondGene(offset: number) {
    offset = 151
    return this.http.get(`${this.baseUrl}?offset=151&limit=100`)
      // .toPromise()
      // .then(res => res.json().results)
      // .then(items => items.map((item, index) => {

      //   const id: number = index + offset + 1;
      //   // this.http.get(`${this.baseUrl}${id}`).subscribe(data => { this.Datas = data.json().types });

      //   // this.http.get(`${this.baseUrl}${id}`).subscribe(data => {
      //   //    data.json().types
      //   //   // console.log(type)
      //   // }
      //   // )
      //   return {
      //     name: item.name,
      //     sprite: `${this.baseSpriteUrl}${id}.png`,
      //     type: this.Datas,
      //     id,
      //   }
      // }))
      .pipe(
        map(res => res.json().results),
        mergeMap((pokemonArray: any) =>
          forkJoin(
            pokemonArray
              .map(pokemon => this.getPokemonByUrl(pokemon.url))
          )
          // map((pokemon: any) => {
          //   return this.http.get(pokemon.url)
          // }),
          // concatAll(),
          // map(res=> res.json()),
        )
      )
  }

  getPokemonByUrl(url) {
    return this.http.get(url).pipe(
      map(res => res.json())
    )
  }
}
