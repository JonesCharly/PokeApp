import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { Pokemon } from '../../Models/pokemon'

@Component({
  selector: 'app-second-generation',
  templateUrl: './second-generation.component.html',
  styleUrls: ['./second-generation.component.scss']
})
export class SecondGenerationComponent implements OnInit {

  pokemon: Pokemon[] = [];
  isLoading: boolean = false;
  error: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.fetchSecond()
  }

  fetchSecond() {
    this.isLoading = true;
    this.apiService.getSecondGene(this.pokemon.length)

    .then(pokemon => {
      pokemon = pokemon.map(list => {
        list.imageLoaded = false;
        return list
      })
      this.pokemon = this.pokemon.concat(pokemon);
      this.isLoading = false;
      this.error = false;
    })

    .catch(() => {
      this.error = true;
      this.isLoading = false;
    })
  }

}
