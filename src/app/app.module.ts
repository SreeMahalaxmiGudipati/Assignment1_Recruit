import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudoperationsComponent } from './crudoperations/crudoperations.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ParentComponent } from './parent/parent.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomeComponent,
    ParentComponent,
    CrudoperationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
