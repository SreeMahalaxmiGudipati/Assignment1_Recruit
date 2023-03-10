import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudoperationsComponent } from './crudoperations/crudoperations.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
 {path:'',component:HomeComponent},
 {path:'parent',component:HomeComponent},
  {path:'',
      children:[
        {path:'parent/home',component:HomeComponent},
        {path:'parent/crudoperations',component:CrudoperationsComponent},
        {path:'parent/list',component:ListComponent},
      ]},
  // {path:'home',component:HomeComponent},
  //      {path:'crudoperations',component:CrudoperationsComponent},
  //    {path:'list',component:ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
