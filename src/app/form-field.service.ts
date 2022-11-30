import { Injectable } from '@angular/core';
import { FormField, FormulaEmitterInput } from './form-field/form-field';
import { ServicesService } from './services.service';

@Injectable({
  providedIn: 'root'
})
export class FormFieldService {

  allItem: { [key: string]: FormField[] | [] } = {};

  constructor(
    private service: ServicesService
  ) { }

  getValueByFormula(formular: string | undefined, rootId: string | undefined) {
    if (!formular || !rootId) {
      console.log('rootId || allItem[rootId] is undefined');
      return undefined;
    }

    const arrFormula = formular.split('+');
    let result = '';

    arrFormula?.forEach(c => {
      const v = this.getValueById(c, rootId) as string;
      result += v ? v + ' ' : '';
    });

    return result;
  }

  getValueById(id: string, rootId: string) {
    if (!rootId || !this.allItem[rootId]) {
      console.log('rootId || allItem[rootId] is undefined');
      return undefined;
    }

    let item = this.allItem[rootId].find(x => x.id == id);

    if (item) {
      const type = typeof (item.value);

      if (type == 'string' || type == "number") {
        return this.getDisplayNameByValue(item, item.value);
      } else if (this.service.isTypeOfDate(item.value)) {
        return this.service.formatDate(item.value as Date);
      } else if (item.type == 'date-range' && type === 'object') {
        let result = null;

        if (item.value.start) {
          result = this.service.formatDate(item.value.start as Date) + ' - ';
        }

        if (item.value.end) {
          result += result ? this.service.formatDate(item.value.end as Date) : (' - ' + this.service.formatDate(item.value.end as Date));
        }

        return result;
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

  onReferenceIdsEmitter(itemData: FormField, rootId: string | undefined) {
    if (!rootId) return console.log('rootId is undefined');

    if (itemData.dataSourceRefIds) {
      itemData.dataSourceRefIds.forEach(e => {
        let item = this.allItem[rootId].find(x => x.id == e.id);

        if (item) {
          this.setDataForDataSourceRefIds(item, e.key, itemData.value, rootId);
        }
      });
    }
  }

  onFormulaEmitter(event: FormulaEmitterInput, rootId: string | undefined) {
    if (!rootId) return console.log('rootId is undefined');

    const data = event;

    if (data.formulaRefIds && data.formulaRefIds?.length > 0) {
      data.formulaRefIds.forEach(e => {
        let item = this.allItem[rootId].find(x => x.id == e);
        if (item) {
          item.value = this.getValueByFormula(item.formular, rootId);
        }
      });
    }
  }

  initAllItem(objectData: FormField | undefined, rootId: string | undefined) {

    if (!rootId || !objectData) {
      console.log('objectData || rootId is undefined, not init all item');
      return;
    }

    if (!this.allItem) this.allItem = {};

    const allObjectHasItems = objectData?.items?.filter(e => e.type === 'group' || e.type === 'form' || e.type === 'group_checkbox');
    const allNotGroupOrForm = objectData?.items?.filter(e => e.type !== 'group' && e.type !== 'form' && e.type != 'table');

    if (objectData.id === rootId) this.allItem[rootId] = [...(this.allItem[rootId] || []), ...([objectData] || [])];

    this.allItem[rootId] = [...(this.allItem[rootId] || []), ...(allNotGroupOrForm || [])];

    allObjectHasItems?.forEach(e => {
      this.initAllItem(e, rootId);
    });
  }

  getResult(obj: FormField, o: any) {
    obj.items?.forEach(e => {
      if (e != undefined && e.code) {
        if (e.type == 'form' || e.type == 'group') {
          o[e.code] = {} as any;
          this.getResult(e, o[e.code]);
        } else if (e.type !== 'table') {
          o[e.code] = e.value;
        }
      }
    });

    return o;
  }

  setValidForRoot(rootId: string | undefined) {
    if (!rootId || !this.allItem[rootId]) {
      console.log('rootId is undefined, cannot check valid root');
      return;
    }

    let root = this.allItem[rootId].find(e => e.id == rootId);

    if (root)
      setTimeout(() => {
        this.onSetValid(root, rootId);
      }, 100)
    else
      console.log('cannot find root, set valid for root');
  }

  private onSetValid(root: any, rootId: string) {
    root.valid = this.allItem[rootId].filter(e => e.id != rootId).every(e => e.valid == true);
  }

  destroy() {
    this.allItem = {};
  }

  private setDataForDataSourceRefIds(item: FormField, key: string, valueFilter: string | number | Date | undefined, rootId: string) {
    item.value = undefined;

    if (item.formulaRefIds) {
      this.onFormulaEmitter({
        formulaRefIds: item.formulaRefIds,
        id: item.id,
        value: item.value
      }, rootId);
    }

    if (!valueFilter)
      item.dataSource = item._dataSource;
    else
      item.dataSource = item._dataSource?.filter(z => z[key] == valueFilter);
  }
}

interface AllItems {
  id: string | undefined;
  items: FormField[]
}