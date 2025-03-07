import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../services/albums.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Album {
  userId: number;
  id: number;
  title: string;
  body:string;
}

@Component({
  selector: 'app-albums',
  standalone  : true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  
  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.albumsService.getAlbums().subscribe((data) => {
      this.albums = data.posts;
    });
  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(album => album.id !== id);
    });
  }
}

