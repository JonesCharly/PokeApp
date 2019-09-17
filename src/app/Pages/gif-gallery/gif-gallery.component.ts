import { Component, OnInit } from '@angular/core';
import { GetGifsService } from '../../Services/get-gifs.service'

@Component({
  selector: 'app-gif-gallery',
  templateUrl: './gif-gallery.component.html',
  styleUrls: ['./gif-gallery.component.scss']
})
export class GifGalleryComponent implements OnInit {

  Datas;
  Links;


  constructor( private getGifService: GetGifsService) { }

  ngOnInit() {
    this.fetchGif()
  }

  fetchGif(){
    this.getGifService.getGif().subscribe(data => {
      this.Datas= data.json().data
    })
  }
}