import { Injectable } from '@angular/core';
import { FormField } from './form-field/form-field';
import { ServicesService } from './services.service';

@Injectable({
  providedIn: 'root'
})
export class FormFieldService {

  constructor(
    private service: ServicesService
  ) { }


  getValueByFormula(formular: string | undefined, object: FormField | undefined) {
    if (!formular || !object) return undefined;

    const arrFormula = formular.split('+');
    let result = '';

    arrFormula?.forEach(c => {
      result += this.getValueById(c, object) as string + ' ';
    });

    return result;
  }

  getValueById(id: string, object: FormField) {
    const item = object?.items?.find(x => x.id == id);
    if (item) {
      const type = typeof (item.value);

      if (type == 'string' || type == "number") {
        return this.getDisplayNameByValue(item, item.value);
      } else if (this.service.isTypeOfDate(item.value)) {
        return this.service.formatDate(item.value as Date);
      }
      return '';
    }
    return '';
  }

  getDisplayNameByValue(item: FormField, value: string | number | Date | undefined) {
    if (value && item.type == 'select') {
      return item.dataSource?.find(e => e.id == value).name;
    }
    return value;
  }
}
