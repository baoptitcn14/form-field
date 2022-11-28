import { Injectable } from '@angular/core';
import { FormField, FormulaEmitterInput } from './form-field/form-field';
import { ServicesService } from './services.service';

@Injectable({
  providedIn: 'root'
})
export class FormFieldService {

  allItem: FormField[] = [];

  constructor(
    private service: ServicesService
  ) { }


  getValueByFormula(formular: string | undefined) {
    if (!formular) return undefined;

    const arrFormula = formular.split('+');
    let result = '';

    arrFormula?.forEach(c => {
      const v = this.getValueById(c) as string;
      result += v ? v + ' ' : '';
    });

    return result;
  }

  getValueById(id: string) {
    let item = this.allItem.find(x => x.id == id);
    if (item) {
      const type = typeof (item.value);

      if (type == 'string' || type == "number") {
        return this.getDisplayNameByValue(item, item.value);
      } else if (this.service.isTypeOfDate(item.value)) {
        return this.service.formatDate(item.value as Date);
      }
      return null;
    }
  }

  getDisplayNameByValue(item: FormField, value: string | number | Date | undefined) {
    if (value && item.type == 'select') {
      return item.dataSource?.find(e => e.id == value).name;
    }
    return value;
  }

  onReferenceIdsEmitter(itemData: FormField) {
    if (itemData.dataSourceRefIds) {
      itemData.dataSourceRefIds.forEach(e => {
        let item = this.allItem.find(x => x.id == e.id);

        if (item) {
          this.setDataForDataSourceRefIds(item, e.key, itemData.value);
        }
      });
    }
  }

  onFormulaEmitter(event: FormulaEmitterInput) {
    const data = event;

    if (data.formulaRefIds && data.formulaRefIds?.length > 0) {
      data.formulaRefIds.forEach(e => {
        let item = this.allItem.find(x => x.id == e);
        if (item) {
          item.value = this.getValueByFormula(item.formular);
        }
      });
    }
  }

  initAllItem(objectData: FormField | undefined) {

    if (!this.allItem) this.allItem = [];

    const allGroupOrForm = objectData?.items?.filter(e => e.type === 'group' || e.type === 'form');
    const allNotGroupOrForm = objectData?.items?.filter(e => e.type !== 'group' && e.type !== 'form');

    this.allItem = [...this.allItem, ...(allNotGroupOrForm || [])];

    allGroupOrForm?.forEach(e => {
      this.initAllItem(e);
    });
  }

  private setDataForDataSourceRefIds(item: FormField, key: string, valueFilter: string | number | Date | undefined) {
    item.value = undefined;

    if (item.formulaRefIds) {
      this.onFormulaEmitter({
        formulaRefIds: item.formulaRefIds,
        id: item.id,
        value: item.value
      });
    }

    if (!valueFilter)
      item.dataSource = item._dataSource;
    else
      item.dataSource = item._dataSource?.filter(z => z[key] == valueFilter);
  }

  // private findItemOnRootById(objectData: FormField | undefined, id: string) {
  //   let result = this.findAllGroupInObject(objectData, id);

  //   if (result === undefined) return result;

  //   if (Array.isArray(result)) {
  //     let f: FormField | undefined;
  //     for (let i = 0; i < result.length; i++) {
  //       f = this.findItemOnRootById(result[i], id);
  //       if (f !== undefined) break;
  //     }
  //     return f;
  //   } else {
  //     return result;
  //   }
  // }

  // private findAllGroupInObject(objectData: FormField | undefined, id: string) {
  //   let item = objectData?.items?.find(x => x.id == id);

  //   if (item) return item;

  //   return objectData?.items?.filter(x => x.type == 'group');
  // }

}
