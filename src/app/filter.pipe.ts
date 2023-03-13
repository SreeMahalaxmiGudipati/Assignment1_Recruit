import { Pipe, PipeTransform } from "@angular/core";
import { Employee } from "src/models/employee.model";


@Pipe({
    name:'filterEmployee'
})

export class FilterPipe implements PipeTransform{
    transform(employee:Employee[], searchValue:string){

            if(!employee){
                return []
              }
              if(searchValue===''){
                return employee;
              }
            else
            {
                return employee.filter((employee) => 
                 {
                    return employee.recruitstatus.toLowerCase().includes(searchValue.toLowerCase())  
                    || employee.name.toLowerCase().includes(searchValue.toLowerCase())
                  //  || employee.designation.toLowerCase() === searchValue.toLowerCase()
                  || employee.designation.toLowerCase().includes(searchValue.toLowerCase())
                    || employee.experiencenoofyears.toLowerCase().includes(searchValue.toLowerCase())
                    || employee.phone.toLowerCase().includes(searchValue.toLowerCase())
                })
            }
    }
}