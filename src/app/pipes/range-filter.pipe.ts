import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rangeFilter'
})
export class RangeFilterPipe implements PipeTransform {

  transform(items: Array<any>, condition: any): Array<any> {
    return items.filter(product => {
      let isReturn;
      for (const field in condition) {
        if (
          Number(product[field]) > Number(condition[field][0]) &&
          Number(product[field]) < Number(condition[field][1]) ||
          (condition[field][0] === '' && condition[field][1] === '') ||
          (Number(product[field]) > Number(condition[field][0]) &&
          Number(condition[field][1] === '')) ||
          (Number(product[field]) > Number(condition[field][1]) &&
          Number(condition[field][0] === ''))
          ) {
          isReturn = true;
        } else if (Number(product[field]) < Number(condition[field][0]) || Number(product[field]) > Number(condition[field][1])) {
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
