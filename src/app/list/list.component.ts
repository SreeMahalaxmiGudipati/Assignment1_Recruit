import { UserService } from '../user.service';
import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{
  data:any;

  constructor(private userservice:UserService,private toastr:ToastrService){
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

  DeleteStudentinfo(id:any){
    this.userservice.DeleteStudent(id).subscribe((data:any)=>
    {
      // console.log(data);
    this.toastr.error('User deleted successfully');
    this.getData(); 
    })
  }
}
