import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ 
    trigger('dropMenu', [
      state('initial', style({
        opacity: '0',
        height: '0px'
      })),
      state('final', style({
        opacity: '1',
        height: '120px',
        backgroundColor: '#de2827'
      })),
      transition('initial => final', animate('500ms ease-out')),
      transition('final => initial', animate('700ms ease-in'))
    ]),
  ]
})

export class AppComponent implements OnInit {
  title = 'pokeApp';
  showMenu: boolean;
  currentState = 'initial';

  ngOnInit() {
    this.showMenu = false;
  }

  openMenu() {
    // this.showMenu =!this.showMenu
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
}
