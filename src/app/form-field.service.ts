import { Injectable } from '@angular/core';
import { FormField, FormulaEmitterInput } from './form-field/form-field';
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
      const v = this.getValueById(c, object) as string;
      result += v ? v + ' ' : '';
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
      return null;
    }
    return null;
  }

  getDisplayNameByValue(item: FormField, value: string | number | Date | undefined) {
    if (value && item.type == 'select') {
      return item.dataSource?.find(e => e.id == value).name;
    }
    return value;
  }

  onReferenceIdsEmitter(itemData: FormField, objectData: FormField | undefined, rootData: FormField | undefined) {
    if (itemData.dataSourceRefIds) {
      itemData.dataSourceRefIds.forEach(e => {
        let item = objectData?.items?.find(x => x.id == e.id);

        if (item) {
          this.setDataForDataSourceRefIds(item, e.key, itemData.value, objectData, rootData);
        } else {
          item = this.findItemOnRootById(rootData, e.id);

          if (item) {
            this.setDataForDataSourceRefIds(item, e.key, itemData.value, objectData, rootData);
          }
        }
      });
    }
  }

  private setDataForDataSourceRefIds(item: FormField, key: string, valueFilter: string | number | Date | undefined, objectData: FormField | undefined, rootData: FormField | undefined) {
    item.value = undefined;

    if (item.formulaRefIds) {
      this.onFormulaEmitter({
        formulaRefIds: item.formulaRefIds,
        id: item.id,
        value: item.value
      }, objectData, rootData);
    }

    if (!valueFilter)
      item.dataSource = item._dataSource;
    else
      item.dataSource = item._dataSource?.filter(z => z[key] == valueFilter);
  }

  private findItemOnRootById(objectData: FormField | undefined, id: string) {
    let result = this.findAllGroupInObject(objectData, id);

    if (typeof (result) == "object") {
      return result as FormField;
    } else {
      if (result) {
        (result as FormField[]).forEach(e => {
          this.findItemOnRootById(e, id);
        });
      }
      return undefined;
    }
  }

  private findAllGroupInObject(objectData: FormField | undefined, id: string) {
    let item = objectData?.items?.find(x => x.id == id);

    if (item) return item;

    return objectData?.items?.filter(x => x.type == 'group');
  }

  onFormulaEmitter(event: FormulaEmitterInput, objectData: FormField | undefined, rootData: FormField | undefined) {

    debugger;
    const data = event;

    if (data.formulaRefIds && data.formulaRefIds?.length > 0) {
      data.formulaRefIds.forEach(e => {
        let item = objectData?.items?.find(x => x.id == e);
        if (item) {
          item.value = this.getValueByFormula(item.formular, objectData);
        } else {
          item = this.findItemOnRootById(rootData, e);

          if (item) {
            item.value = this.getValueByFormula(item.formular, objectData);
          }
        }
      });
    }
  }
}
