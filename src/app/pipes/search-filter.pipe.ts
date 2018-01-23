import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(products: Array<any>, condition: any): Array<any> {
    return products.filter(product => {
      let isReturn;
      for (const field in condition) {
        if (product[field] === condition[field] || condition[field] === '') {
          isReturn = true;
        } else if (product[field] !== condition[field]) {
          isReturn = false;
          return false;
        }
      }
      if (isReturn) {
        return true;
      }
    });
  }
}

