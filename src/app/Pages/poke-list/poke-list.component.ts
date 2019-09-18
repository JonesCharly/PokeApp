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


  constructor(private apiService: ApiService) { }

  ngOnInit(){
  }

  fetchFirst() {
    this.apiService.getFirstGene()
      .subscribe((result: any) => {
        this.pokemon = result;
      });
  }

}
