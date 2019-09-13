import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { ApiService } from './Services/api.service'

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    PokeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
