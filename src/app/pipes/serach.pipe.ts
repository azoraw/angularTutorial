import { Pipe, PipeTransform } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';

@Pipe({
  name: 'serach'
})
export class SerachPipe implements PipeTransform {

  transform(arr: any, filters?: any): any {
    if (arr) {
      return arr.filter((item) => {
        for (const key in filters) {
          const value = filters[key].toLowerCase()
          if (!String(item[key]).toLowerCase().includes(value)) {
            return false
          } 
        }
        return true
      });
    }
    return null;
  }

}
