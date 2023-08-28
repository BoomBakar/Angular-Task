import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DirectorService } from 'src/app/services/directors.service';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.css']
})
export class DirectorsComponent {
  
  constructor(
    private directorService: DirectorService
  ) { 
    if(this.directorService.hasdirectors()){
    
      this.directors = this.directorService.getdirectors();
    }
    
    else{
      this.directors = this.directorService.getAlldirectors();
      }
  }


  directors: Array<any> = [];
  isAdd:boolean = false;
  name: string = '';
  age: number = 0;

  myForm:FormGroup=new FormGroup({});

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
    });
  }

  addDirector():void {
    this.isAdd = true;
  }
  onSubmit():void {
    const director = {
      name: this.myForm.value.name,
      age: this.myForm.value.age,
    }
    this.directors.push(director);
    this.myForm.reset();
  }
  onDel(index:number):void {
    this.directors.splice(index,1);
  }


}
