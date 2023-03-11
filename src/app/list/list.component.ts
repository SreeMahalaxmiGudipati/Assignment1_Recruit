import { UserService } from '../user.service';
import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
// import { OrderByPipe } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
 // providers: [OrderByPipe]
})
export class ListComponent implements OnInit{
  data:any;
  searchValue: string = '';
  items: any;

  constructor(private userservice:UserService,private toastr:ToastrService,private router:Router){
    this.getData();
   }

   ngOnInit(): void {
    this.filterEmployees();
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
    this.toastr.error('User deleted successfully');
    this.getData(); 
    })
  }

  redirectToDestination(id:any) {
    this.router.navigate(['/parent/addupdate/'+id]);
  }

  filterEmployees() {
    this.data= this.data.filter((employee: { name: string; phone: string; recruitstatus: string; designation: string; experiencenoofyears: string; }) =>
    employee.name.toLowerCase().includes(this.searchValue.toLowerCase())
      || employee.phone.toString().includes(this.searchValue)
      || employee.recruitstatus.toLowerCase().includes(this.searchValue.toLowerCase())
      || employee.designation.toLowerCase().includes(this.searchValue.toLowerCase())
      || employee.experiencenoofyears.toString().includes(this.searchValue)
    );
  }

  onSearch() {
    this.filterEmployees();
  }
 
  sortByID(a:any,b:any)
  {
      if(a.id<b.id){
        return -1;
      }
      if(a.id < b.id){
        return 1;
      }
      return 0;
   }
   
   OnSortByID()
   {
    this.data.sort(this.sortByID);
   }

   sortByName(a: any, b: any) {
    const Aname=a.name.toLowerCase();
    const Bname=b.name.toLowerCase();
    if (Aname < Bname) {
      return -1;
    }
    if (Aname > Bname) {
      return 1;
    }
    return 0;
  }

  OnSortByName()
   {
    this.data.sort(this.sortByName);
   }
   

}
