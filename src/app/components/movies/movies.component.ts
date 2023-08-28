import { Component, inject } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  movies: Array<any> = [];
  private isAdd:boolean = false;

  private moviesService= inject(MoviesService);
  constructor() { 
    this.moviesService.getAllMovies().subscribe((data: any) => {
      this.movies = data;
      console.log(this.movies);

    })
}
addMovie():void {
  this.isAdd = true;
  }

}
