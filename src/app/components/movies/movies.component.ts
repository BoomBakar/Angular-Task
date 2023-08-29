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
  myPromise:any;

  private moviesService= inject(MoviesService);
  constructor() { 
    if(this.moviesService.hasMovies()){
        this.moviesService.getMovies();
    }
    
    else{
      this.getMov();
      this.myPromise.then((data:any)=>{
        console.log(data);
        this.movies = data;
      }).catch((err:any)=>{
        console.log(err);
      });
    }
  }
// getDirectorInfo(director:string):any{
//   return this.moviesService.getDirectorInfo(director);
// }

getMov(){
  this.myPromise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
      this.movies =this.moviesService.getAllMovies()
      resolve(this.movies);
      reject('error');
    },3000);
  });
}
addMovie():void {
  this.isAdd = true;
  }
  onSubmit():void {

    const movie = {
      title: this.title,
      yearReleased: this.yearReleased,
      director: this.director
    }
    console.log(movie);
    this.moviesService.addMovie(movie);
    console.log(this.movies);
  }
  onDel(index:number):void {
    this.moviesService.deleteMovie(index);
  }

  

}
