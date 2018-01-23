import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment/src/moment';

@Pipe({
  name: 'experienceYears'
})
export class ExperienceYearsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = moment(new Date()).diff(value, 'years');
    return value > 1 ? value + ' years' : value + ' year';
  }

}
