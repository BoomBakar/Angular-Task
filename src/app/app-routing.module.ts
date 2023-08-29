import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { DirectorsComponent } from './components/directors/directors.component';
import { ErrComponent } from './components/err/err.component';
import { authGuard } from './services/auth.guard';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'movies', component:MoviesComponent},
  {path:'directors', component:DirectorsComponent, canActivate:[authGuard]},
  {path:'access-denied', component:AccessDeniedComponent},
  {path:'**', component:ErrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
