import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeListComponent } from './Pages/poke-list/poke-list.component';
import { ApiService } from './Services/api.service'

import { HttpModule } from '@angular/http';
import { MyFavoritsComponent } from './Pages/my-favorits/my-favorits.component';
import { SecondGenerationComponent } from './Pages/second-generation/second-generation.component';
import { GifGalleryComponent } from './Pages/gif-gallery/gif-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeListComponent,
    MyFavoritsComponent,
    SecondGenerationComponent,
    GifGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
