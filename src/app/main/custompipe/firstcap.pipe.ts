import { Pipe, PipeTransform } from '@angular/core';
import { first } from 'rxjs';

@Pipe({
  name: 'firstcap'
})
export class FirstcapPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let first = value.charAt(0).toUpperCase();
    return first+value.slice(1);
  }

}
