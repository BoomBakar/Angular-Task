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
      console.log(this.unfilteredMovies);
    });
    
    this.unfilteredMovies.forEach(element => {
      let name= this.getDirectorInfo(element.director);
      console.log("NAME SHOULD BE" + name);
      
      const movie = {
        title: element.title,
        yearReleased: element.yearReleased,
        director: this.getDirectorInfo(element.director)
      }
      console.log(movie.director)
      this.movies.push(movie);
    });
    console.log(this.movies);
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
  getDirectorInfo(director:string):any{
    console.log(director);
    const url = `http://localhost:2000/api/directors/${director}`;
    let name:string = '';
    this.http.get<any>(url).subscribe((data: any) => {
      name = data.name;
      console.log("NAME IS " + name);
      return name;   
    }   
    );
  }
}
