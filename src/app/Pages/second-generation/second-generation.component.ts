import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { Pokemon } from '../../Models/pokemon'


@Component({
  selector: 'app-second-generation',
  templateUrl: './second-generation.component.html',
  styleUrls: ['./second-generation.component.scss']
})
export class SecondGenerationComponent implements OnInit {

  pokemons: Pokemon[] = [];
  pokeObj;


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.fetchSecond()
  }

  fetchSecond() {
    this.apiService.getSecondGene(this.pokemons.length)
      .subscribe((result: any) => {
        this.pokemons = result;
      });
  }

}
