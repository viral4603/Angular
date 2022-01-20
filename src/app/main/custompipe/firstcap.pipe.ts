import { Pipe, PipeTransform } from '@angular/core';
import { first } from 'rxjs';

@Pipe({
  name: 'firstcap'
})
export class FirstcapPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let first = value.substring(0,1).toUpperCase();
    return first+value.substring(1);
  }

}
