import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
import { Employee } from 'src/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl ="http://localhost:5052/api/Employee";
  constructor(private http:HttpClient) { }

  
 getAllStudents() : Observable<Employee[]>  {
  return this.http.get<Employee[]>(this.baseUrl);
 }

 DeleteStudent(id:any) : Observable<Employee[]>  {
  return this.http.delete<Employee[]>(this.baseUrl+'/'+id);
 }
 

 registerUser(user:Array<String>)
 {
   return this.http.post(this.baseUrl ,{
     Name:user[0],
     Phone:user[1],
     RecruitStatus:user[2],
     Designation:user[3],
     experiencenoofyears:user[4]
     
   },
   {
     responseType:'text',
   });
 }

}
