import { Component, OnDestroy } from '@angular/core';
import { FormFieldService } from './form-field.service';
import { FormField } from './form-field/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  listObjectForm: FormField[] = [{
    id: 'a',
    code: 'AA',
    index: 0,
    name: '',
    type: 'form',
    class: 'row',
    items: [
      {
        id: 'g1',
        code: 'group1',
        index: 0,
        name: 'group 1',
        class: 'col-12 col-md-12',
        type: 'group',
        alignName: 'center',
        items: [
          {
            id: 'g1_i1',
            name: 'g1 i1',
            code: 'sonha',
            type: 'text',
            class: 'col-12 col-md-6',
            index: 0,
            value: undefined
          },
          {
            id: 'g1_i2',
            name: 'g1 i2',
            code: 'diachi',
            type: 'text',
            class: 'col-12 col-md-6',
            index: 1,
            value: undefined,
            formulaRefIds: ['f6']
          },
          {
            id: 'g1_i3',
            code: 'g1_i3',
            name: 'g1 i3',
            type: 'select',
            class: 'col-12 col-md-12',
            index: 2,
            value: undefined,
            dataSource: [
              {
                id: 't1',
                name: 'UI'
              },
              {
                id: 't2',
                name: 'T 2'
              }
            ],
            dataSourceRefIds: [{ id: 'f2', key: 'refId' }]
          },
          {
            id: 'g1_1',
            name: 'g1_1',
            code: 'g1_1',
            type: 'group',
            class: 'col-12 col-md-12',
            index: 0,
            items: [
              {
                id: 'g1_1_i1',
                name: 'g1_1 i1',
                code: 'g1_1_i1',
                type: 'text',
                class: 'col-12 col-md-6',
                index: 0,
                value: undefined
              },
              {
                id: 'g1_1_i2',
                name: 'g1_1 i2',
                code: 'g1_1_i2',
                type: 'text',
                class: 'col-12 col-md-6',
                index: 1,
                value: undefined,
                formulaRefIds: ['f6']
              },
            ]
          },
        ]
      },
      {
        id: 'f1',
        code: 'tinh',
        index: 0,
        name: 'Tỉnh',
        type: 'select',
        value: undefined,
        dataSource: [
          {
            id: 't1',
            name: 'Tỉnh 1'
          },
          {
            id: 't2',
            name: 'Tỉnh 2'
          },
          {
            id: 't3',
            name: 'Tỉnh 3'
          }
        ],
        class: 'col-12 col-md-6',
        formulaRefIds: ['f6'],
        dataSourceRefIds: [{ id: 'f2', key: 'refId' }],
        selectAll: true
      },
      {
        id: 'f2',
        code: 'thanhpho',
        index: 1,
        name: 'Thành phố, Huyện',
        type: 'select',
        dataSource: [
          {
            id: 'select1',
            name: 'select 1',
            refId: 't1'
          },
          {
            id: 'select2',
            name: 'select 2',
            refId: 't2'
          },
          {
            id: 'select3',
            name: 'select 3',
            refId: 't3'
          }
        ],
        _dataSource: [
          {
            id: 'select1',
            name: 'select 1',
            refId: 't1'
          },
          {
            id: 'select2',
            name: 'select 2',
            refId: 't2'
          },
          {
            id: 'select3',
            name: 'select 3',
            refId: 't3'
          }
        ],
        value: undefined,
        required: true,
        disabled: false,
        class: 'col-12 col-md-6',
        search: true,
        formulaRefIds: ['f6']
      },
      {
        id: 'f3',
        code: 'sonha',
        index: 2,
        name: 'Số nhà',
        type: 'number',
        value: 3,
        required: true,
        class: 'col-12 col-md-6',
        min: 0,
        max: 2,
        formulaRefIds: ['f6']
      },
      {
        id: 'f3a',
        code: 'gioitinh',
        index: 2,
        name: 'Giới tính nam',
        type: 'checkbox',
        value: undefined,
        class: 'col-12 col-md-6'
      },
      {
        id: 'f3aa',
        code: 'gioitinh2',
        index: 2,
        name: 'Giới tính nu',
        type: 'checkbox',
        value: undefined,
        class: 'col-12 col-md-6'
      },
      {
        id: 'f3aa1122233',
        code: 'gioitinh21',
        index: 2,
        name: 'group checkbox',
        type: 'group_checkbox',
        value: undefined,
        class: 'col-12 col-md-6',
        items: [
          {
            id: 'aa1ll',
            code: 'aaa1',
            index: 0,
            name: 'cb 1',
            type: 'checkbox',
            value: undefined
          },
          {
            id: 'aa1ll1',
            code: 'aaa11',
            index: 0,
            name: 'cb 2',
            type: 'checkbox',
            value: undefined
          },
          {
            id: 'aa1ll2',
            code: 'aaa112',
            index: 0,
            name: 'cb 3',
            type: 'checkbox',
            value: undefined
          }
        ]
      },
      {
        id: 'rf3aa1',
        code: 'group_radio1',
        index: 2,
        name: 'radio 1',
        type: 'group_radio',
        value: 'undefined',
        class: 'col-12 col-md-6',
        items: [
          {
            id: 'raa1ll',
            code: 'raaa1',
            index: 0,
            name: 'rd 1',
            type: 'radio',
            value: 'undefined',
            inputName: 'rin'
          },
          {
            id: 'raa1ll1',
            code: 'raaa11',
            index: 0,
            name: 'rd 2',
            type: 'radio',
            value: 'undefined1',
            inputName: 'rin'
          },
          {
            id: 'raa1ll2',
            code: 'raaa112',
            index: 0,
            name: 'rd 3',
            type: 'radio',
            value: 'undefined2',
            inputName: 'rin'
          }
        ]
      },
      {
        id: 'f4',
        code: 'ngay',
        index: 5,
        name: 'Ngày',
        type: 'date',
        value: undefined,
        disabled: false,
        class: 'col-12 col-md-6',
        required: true,
        formulaRefIds: ['f6']
      },
      {
        id: 'f422211',
        code: 'ngay-range',
        index: 5,
        name: 'Ngày Range',
        type: 'date-range',
        value: undefined,
        disabled: false,
        class: 'col-12 col-md-6',
        required: true,
        formulaRefIds: ['f6']
      },
      {
        id: 'f6',
        code: 'diachi',
        index: 6,
        name: 'Địa chỉ',
        type: 'text',
        value: undefined,
        disabled: true,
        class: 'col-12 col-md-12',
        formular: 'g1_1_i2+f4+f3+f555+f2+f1+g1_i2+f422211'
      },
      {
        id: 'f555',
        code: 'text',
        index: 92,
        name: 'text',
        type: 'text',
        value: undefined,
        class: 'col-12 col-md-12',
        formulaRefIds: ['f6']
      },
      {
        id: 'f555',
        code: 'files1',
        index: 92,
        name: 'files',
        type: 'file',
        value: undefined,
        class: 'col-12 col-md-6',
        multiple: true
      },
      {
        id: 'f5',
        code: 'table',
        index: 99,
        name: 'table',
        type: 'table',
        value: undefined,
        class: 'col-12 col-md-12',
        dataSource: [
          {
            headers: [
              {
                key: 'surname',
                name: 'Họ'
              },
              {
                key: 'lastname',
                name: 'Tên'
              },
              {
                key: 'ages',
                name: 'Tuổi'
              }
            ],
            datas: [
              {
                surname: 'Đinh Thế',
                lastname: 'Bảo',
                ages: 27
              }
            ]
          }
        ]
      }
    ]
  }
  ];

  result = {} as any;

  constructor(private formFieldService: FormFieldService) { }

  ngOnDestroy(): void {
    this.formFieldService.destroy();
  }

  onAction(obj: FormField) {
    this.result = this.formFieldService.getResult(obj, {} as any);
    console.log(this.result);
  }
}
