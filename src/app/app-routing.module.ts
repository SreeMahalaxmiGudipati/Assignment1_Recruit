import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddupdateComponent } from './addupdate/addupdate.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
 {path:'',component:HomeComponent},
 {path:'parent',component:HomeComponent},
  {path:'',
      children:[
        {path:'parent/home',component:HomeComponent},
        {path:'parent/addupdate',component:AddupdateComponent},
        {path:'parent/list',component:ListComponent},
        {path:'parent/addupdate/:id',component:AddupdateComponent}
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
