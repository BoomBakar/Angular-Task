import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {
  private url = 'http://localhost:2000/api/directors';

  private directors: Array<any> = [];
  private unfiltereddirectors: Array<any> = [];
  constructor(
    private http: HttpClient
  ) { }
  getdirectors() {
    return this.directors;
  }
  getAlldirectors() {
    this.http.get<any>(this.url).subscribe((data: any) => {
     
      this.unfiltereddirectors = data;
    });
    this.unfiltereddirectors.forEach(element => {
      const director = {
        name: element.name,
        age: element.age,
        pic: element.photoPath
      }
      this.directors.push(director);
    });
    return this.directors;
  }
  hasdirectors(){
    return this.directors.length > 0;
  }
  adddirector(director: any) {
    const body = {
      name: director.name,
      age: director.age
    }
    this.directors.push(body);
  }
  deletedirector(index:number) {
    this.directors.splice(index,1);
  }
}
