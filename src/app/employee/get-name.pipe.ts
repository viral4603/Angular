import { Pipe, PipeTransform } from '@angular/core';
import { Department, Employee } from './model';

@Pipe({
  name: 'getName'
})
export class GetNamePipe implements PipeTransform {
  
  transform(value: number, args: Department[]): string  {
    let name:string = '';
    args?.find((data)=> {
      if(data.id == value) {
        name = data.name
      }
    })
     return name
  }

}
