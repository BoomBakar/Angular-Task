import { Component, inject } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  movies: Array<any> = [];
  isAdd:boolean = false;
  title: string = '';
  yearReleased: string = '';
  director: string = '';

  private moviesService= inject(MoviesService);
  constructor() { 
    if(this.moviesService.hasMovies()){
    
      this.movies = this.moviesService.getMovies();
    }
    
    else{
      this.movies = this.moviesService.getAllMovies();
      }
  }
getDirectorInfo(director:string):any{
  return this.moviesService.getDirectorInfo(director);
}
addMovie():void {
  this.isAdd = true;
  }
  onSubmit():void {

    const movie = {
      title: this.title,
      yearReleased: this.yearReleased,
      director: this.getDirectorInfo(this.director)
    }
    console.log(movie);
    this.moviesService.addMovie(movie);
    console.log(this.movies);
  }
  onDel(index:number):void {
    this.moviesService.deleteMovie(index);
  }

  

}
