import { UserService } from '../user.service';
import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
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
  statusCounts!: { Accepted: number; Rejected: number; Progress: number; };

  @Output() numbersEvent = new EventEmitter<number[]>();
  number1: number = 1;
  number2: number = 2;
  number3: number = 3;

  emitNumbers() {
    const numbers = [this.number1, this.number2, this.number3];
    this.numbersEvent.emit(numbers);
    console.log(numbers);
  }

  constructor(private userservice:UserService,private toastr:ToastrService,private router:Router){
    // this. emitNumbers();
    this.getData();
    this.getcounts();
   }

   ngOnInit(): void {
    this.filterEmployees();
  }

  //counting status for Accepted,rejected,Progress
  private countStatus(data: any[]): { Accepted: number, Rejected: number, Progress: number } {
    const counts = { Accepted: 0, Rejected: 0, Progress: 0 };
    for (let item of data) {
      counts[item.recruitstatus as 'Accepted' | 'Rejected' | 'Progress']++;
    }
    console.log(counts);
    return counts;
  }

  //calling counting function to check status in data
  getcounts(){
    this.userservice.getAllStudents().subscribe((data) => {
      this.statusCounts = this.countStatus(data);
    });
    console.log(this.statusCounts);
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

  //filtering data with search value
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
 
  //sorting data by ID
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

   //sorting data by name
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
   
   //sorting data by STATUS
   sortByStatus(a: any, b: any) {
    const Astatus=a.recruitstatus.toLowerCase();
    const Bstatus=b.recruitstatus.toLowerCase();
    if (Astatus < Bstatus) {
      return -1;
    }
    if (Astatus > Bstatus) {
      return 1;
    }
    return 0;
  }

  OnSortByStatus()
   {
    this.data.sort(this.sortByStatus);
   }

   //sorting data by Number of years experience
  sortByExpereince(a:any,b:any)
  {
    const Aexp=parseInt(a.experiencenoofyears);
    const Bexp=parseInt(b.experiencenoofyears);
      if(Aexp < Bexp){
        return -1;
      }
      if(Aexp < Bexp){
        return 1;
      }
      return 0;
   }
   
   OnSortByExpereince()
   {
    this.data.sort(this.sortByExpereince);
   }

   

}
