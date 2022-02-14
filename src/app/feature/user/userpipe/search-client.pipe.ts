import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user';

@Pipe({
  name: 'searchClient'
})
export class SearchClientPipe implements PipeTransform {

  transform(value: User[], id: number): User[] | undefined{
    if (id == 0){
      return value; 
  }
   else{            
      return value?.filter((data:User)=>{
        return data.clientname == id;
     })
   }
  }

}
