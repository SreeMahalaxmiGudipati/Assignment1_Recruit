import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-crudoperations',
  templateUrl: './crudoperations.component.html',
  styleUrls: ['./crudoperations.component.css']
})
export class CrudoperationsComponent {
  data:any;
  constructor(private userservice:UserService){
    this.getData();
   }
 
    getData()
  {
    this.userservice.getAllStudents().subscribe((data: any)=>
    {
      this.data=data;
       console.log(this.data);
    });
  }
}
