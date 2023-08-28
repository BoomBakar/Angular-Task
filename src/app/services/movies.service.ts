import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private url = 'http://localhost:2000/api/movies';

  private movies: Array<any> = [];
  constructor(
    private http: HttpClient
  ) { }
  getAllMovies() {
    return this.http.get<any>(this.url);
  }
  
}
