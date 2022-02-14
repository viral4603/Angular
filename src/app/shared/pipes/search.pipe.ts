import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from 'src/app/feature/employee/model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Employee[], searchtext:string ): Employee[] {
    if (searchtext === ''){
       return value;
   }
    else{            
       return value.filter((data:Employee)=>{
         return data.firstname.toLowerCase().match(searchtext.toLowerCase());
      })
    }
  }

}
