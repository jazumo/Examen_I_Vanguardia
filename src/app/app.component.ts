import { Component, OnInit } from '@angular/core';
import { Album } from './models';     //Se impporta el modelo que se quiere usar

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'practice';
  albums !: Array<Album>;
  selected_album ?: Album;
  
  ngOnInit(): void {
    this.albums = [
      {nombre: "Album 1", artista: "Artista 1", resenia: 1, precio: 10},
      {nombre: "Album 2", artista: "Artista 2", resenia: 2, precio: 20},
      {nombre: "Album 3", artista: "Artista 3", resenia: 3, precio: 30},
      {nombre: "Album 4", artista: "Artista 4", resenia: 4, precio: 40}
    ]
  }

  onClick(album : Album)
  {
    this.selected_album = album;
  }
}
