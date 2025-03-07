import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private albumsUrl = 'https://dummyjson.com/posts';
  private photosUrl = 'https://dummyjson.com/comments';


  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any> {
    return this.http.get<any>(this.albumsUrl);
  }

  getAlbumById(id: number): Observable<any> {
    return this.http.get<any>(`${this.albumsUrl}/${id}`);
  }

  getPhotosByAlbumId(albumId: number): Observable<any> {
    return this.http.get<any>(this.photosUrl);
  }

  updateAlbum(album: any): Observable<any> {
    return this.http.put<any>(`${this.albumsUrl}/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<any> {
    return this.http.delete<any>(`${this.albumsUrl}/${id}`);
  }
  
  
}
