import { Injectable } from '@angular/core';
import { FormField } from './form-field/form-field';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  isTypeOfDate(input: any) {
    if (Object.prototype.toString.call(input) === "[object Date]")
      return true;
    return false;
  }

  padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }
  
  formatDate(date: Date) {
    return [
      this.padTo2Digits(date.getDate()),
      this.padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }
}