import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppShellComponent } from './app-shell/app-shell.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { UtilComponent } from './util/util.component';

const routes: Routes = [
  {
    path:'',
    component:AppShellComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'categories',
        component:CategoriesComponent
      },
      {
        path:'util',
        component:UtilComponent
      },
      {
        path:'**',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
