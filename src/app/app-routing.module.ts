import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeListComponent } from './Pages/poke-list/poke-list.component';
import { SecondGenerationComponent } from './Pages/second-generation/second-generation.component';
import { MyFavoritsComponent } from './Pages/my-favorits/my-favorits.component';
import { GifGalleryComponent } from './Pages/gif-gallery/gif-gallery.component';



const routes: Routes = [
  { path: 'firstGeneration', component: PokeListComponent},
  { path: '', component: PokeListComponent},
  { path: 'secondGeneration', component: SecondGenerationComponent},
  { path: 'myFavorits', component: MyFavoritsComponent},
  { path: 'gifsPage', component: GifGalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
