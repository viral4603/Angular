import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../model/user';

@Pipe({
  name: 'idToName'
})
export class IdToNamePipe implements PipeTransform {

  transform(value: number,client: Client[]): string | undefined {
    return client?.find(data => data.id == value)?.name
  }
}
