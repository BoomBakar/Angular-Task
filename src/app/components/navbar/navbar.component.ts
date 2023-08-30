import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  theme = 'light';
  isLight = false;
  constructor() { }

  toggleTheme() {
    if(this.isLight) {
    this.isLight=true;
    this.theme='light';
    if(document.body.classList.contains('dark'))
      document.body.classList.remove("dark")
  }
  else{
    this.isLight = false;
    this.theme = 'dark';
    if(!document.body.classList.contains('dark'))
      document.body.classList.add("dark")
  }
    
  }
}
