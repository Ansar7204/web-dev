import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Album {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editedTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    const albumId = this.route.snapshot.paramMap.get('id');
    if (albumId) {
      this.albumsService.getAlbumById(+albumId).subscribe((data) => {
        this.album = data;
        this.editedTitle = data.title;
      });
    }
  }

  saveTitle(): void {
    if (this.album) {
      const updatedAlbum = { ...this.album, title: this.editedTitle };
      this.albumsService.updateAlbum(updatedAlbum).subscribe((response: Album) => {
        this.album = response;
        alert('Album title updated!');
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
