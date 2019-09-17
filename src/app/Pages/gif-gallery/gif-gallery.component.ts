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
    this.listItem()
  }

  fetchGif(){
    this.getGifService.getGif().subscribe(data => {
      this.Datas= data.json().data

    })
  }
  
  listItem() {
    for(let i = 1; i < this.Datas.length; i++){
      console.log(this.Datas[i].id)
    }
  }

}