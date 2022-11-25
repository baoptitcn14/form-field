import { Component, Input, OnInit } from '@angular/core';
import { FormFieldService } from 'src/app/form-field.service';
import { FormField, FormulaEmitterInput } from 'src/app/form-field/form-field';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'm-group',
  templateUrl: './m-group.component.html',
  styleUrls: ['./m-group.component.scss']
})
export class MGroupComponent implements OnInit {
  @Input('itemData') groupData: FormField | undefined;

  constructor(private formFieldService: FormFieldService) { }

  ngOnInit(): void {
  }

  onReferenceIdsEmitter(itemData: FormField) {
    if (itemData.dataSourceRefIds) {
      itemData.dataSourceRefIds.forEach(e => {
        let item = this.groupData?.items?.find(x => x.id == e.id);

        if (item) {
          item.value = undefined;

          if (item.formulaRefIds) {
            this.onFormulaEmitter({
              formulaRefIds: item.formulaRefIds,
              id: item.id,
              value: item.value
            });
          }

          if (!itemData.value)
            item.dataSource = item._dataSource;
          else
            item.dataSource = item._dataSource?.filter(z => z[e.key] == itemData.value);
        }
      });
    }
  }

  onFormulaEmitter(event: FormulaEmitterInput) {
    const data = event;

    if (data.formulaRefIds && data.formulaRefIds?.length > 0) {
      data.formulaRefIds.forEach(e => {
        let item = this.groupData?.items?.find(x => x.id == e);
        if (item) {
          item.value = this.formFieldService.getValueByFormula(item.formular, this.groupData);
        }

      });
    }
  }

}
