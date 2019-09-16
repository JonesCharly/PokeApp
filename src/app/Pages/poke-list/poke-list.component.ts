import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { Pokemon } from '../../Models/pokemon'

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  pokemon: Pokemon[] = [];
  isLoading: boolean = false;
  error: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(){
    this.fetchPokemon()
  }

  fetchPokemon() {
    this.isLoading = true;
    this.apiService.getPokemon(this.pokemon.length)
    
    .then(pokemon => {
      pokemon = pokemon.map(list => {
        list.imageLoaded = false;
        return list;
      });
      this.pokemon = this.pokemon.concat(pokemon);
      this.isLoading = false;
      this.error = false;
    })

    .catch(() => {
      this.error = true;
      this.isLoading = false;
    });


  }
}
