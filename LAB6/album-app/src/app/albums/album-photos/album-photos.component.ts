import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../../services/albums.service';
import { CommonModule } from '@angular/common';

interface Photo {
  id: number;
  body: string; 
  postId: number;
  thumbnailUrl?: string;
  url?: string;
}

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.albumId = +id;
      this.albumsService.getPhotosByAlbumId(this.albumId).subscribe((data) => {
        const comments: Photo[] = data.comments;
        this.photos = comments.map(photo => ({
          ...photo,
          thumbnailUrl: `https://picsum.photos/seed/${photo.id}/150/150`,
          url: `https://picsum.photos/seed/${photo.id}/600/400`
        }));
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/albums',this.albumId]);
  }
}

