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

}
