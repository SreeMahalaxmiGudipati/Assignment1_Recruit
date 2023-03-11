import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/models/employee.model';
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
  employee = new Employee();
  activeindex=-1;
  id:any;

  constructor(private userservice:UserService,private toastr:ToastrService,private route:ActivatedRoute){
     this.id=this.route.snapshot.params['id'];
       this.Decidegoto();
   }

   Decidegoto(){
    if(this.id>0)
    {
      this.activeindex=this.id;
      console.log("Update page valid");
      this.getInfoById();
    }
    else{
      console.log("Register page valid");
    }
   }

   public addupdateForm=new FormGroup({
    Name:new FormControl(''),
    Phone:new FormControl(),
    pass:new FormControl(''),
    recruitstatus:new FormControl(''),
    designation:new FormControl(''),
    experiencenoofyears:new FormControl('')
   });


   getData()
   {
     this.userservice.getAllStudents().subscribe((data: any)=>
     {
       this.data=data;
        console.log(this.data);
     });
   }

   
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
    }
});
}

getInfoById(){
  this.userservice.getDetailsById(this.id).subscribe((data:any)=>
  {
    this.data=data;
    console.log(this.data);
    this.setvalues(this.data);
  })
}

setvalues(data:any){

  this.employee.id=data.id;
  this.employee.name=data.name;
  this.employee.phone=data.phone;
  this.employee.recruitstatus=data.recruitstatus;
  this.employee.designation=data.designation;
  this.employee.experiencenoofyears=data.experiencenoofyears;
  console.log("Edit over");
  console.log(data);
}

UpdateStudentinfo(obj: { id:any; name: any; phone:any ;recruitstatus:any ; designation:any; experiencenoofyears:any; }){

  console.log(this.employee);
  this.userservice.UpdateStudent(this.employee).subscribe((res:any)=>
    {
      this.toastr.info('User Updated successfully');
      this.getData();
    });
}


save(){
  if(this.activeindex==-1){
    
    console.log("resgister");
    this.registerSubmitted();
    this.addupdateForm.reset();
  }
  else{
    console.log("Update");
    this.getInfoById();
    this.UpdateStudentinfo(this.employee);
    
  }
}


}
