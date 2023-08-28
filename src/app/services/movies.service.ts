import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private url = 'http://localhost:2000/api/movies';

  private movies: Array<any> = [];
  private unfilteredMovies: Array<any> = [];
  constructor(
    private http: HttpClient
  ) { }
  getMovies() {
    return this.movies;
  }
  getAllMovies() {
    this.http.get<any>(this.url).subscribe((data: any) => {
     
      this.unfilteredMovies = data;
    });
    this.unfilteredMovies.forEach(element => {
      const movie = {
        title: element.title,
        yearReleased: element.yearReleased,
        director: element.director
      }
      this.movies.push(movie);
    });
    return this.movies;
  }
  hasMovies(){
    return this.movies.length > 0;
  }
  addMovie(movie: any) {
    const body = {
      title: movie.title,
      yearReleased: movie.yearReleased,
      director: movie.director
    }
    this.movies.push(body);
  }
  deleteMovie(index:number) {
    this.movies.splice(index,1);
  }
}
