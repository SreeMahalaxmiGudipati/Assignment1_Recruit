import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-addupdate',
  templateUrl: './addupdate.component.html',
  styleUrls: ['./addupdate.component.css']
})
export class AddupdateComponent {
  data:any;
  displayMsg:string='';
  isAccountCreated: boolean=false;
  constructor(private userservice:UserService,private toastr:ToastrService){
   }

   public addupdateForm=new FormGroup({
    Name:new FormControl(''),
    Phone:new FormControl(),
    pass:new FormControl(''),
    recruitstatus:new FormControl(''),
    designation:new FormControl(''),
    experiencenoofyears:new FormControl('')
   });
   
  registerSubmitted(){
      
    this.userservice.registerUser([
      this.addupdateForm.value.Name,
      this.addupdateForm.value.Phone,
      this.addupdateForm.value.recruitstatus,
      this.addupdateForm.value.designation,
      this.addupdateForm.value.experiencenoofyears
  ]).subscribe((res: any)=>{
    if(res==''){
      this.displayMsg='Something went wrong';
      this.toastr.error(res.Errors[0]);
      console.log(res);
      this.getData();
    }
    else {
      console.log(res);
      this.displayMsg='Account created successfully';
      this.toastr.success('Employee added successfully');
   //   this.toastr.error('User deleted successfully');
    }
});
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
