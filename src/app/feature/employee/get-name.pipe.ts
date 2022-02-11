import { Pipe, PipeTransform } from '@angular/core';
import { Department, Employee } from './model';

@Pipe({
  name: 'getName'
})
export class GetNamePipe implements PipeTransform {
  
  transform(value: number, args: Department[]): string | undefined {
    
    return args?.find(data => data.id == value)?.name
     
  }

}
