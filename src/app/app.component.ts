import { Component } from '@angular/core';
import { FormField } from './form-field/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listObjectForm: FormField[] = [{
    id: 'a',
    code: 'AA',
    index: 0,
    name: 'aaaA',
    type: 'form',
    class: 'row',
    items: [
      {
        id: 'f1',
        code: 'coddef',
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
        referenceIds: [{ id: 'f2', key: 'refId' }],
        isHasSelectAll: true
      },
      {
        id: 'f2',
        code: 'coddef4',
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
        search: true
      },
      {
        id: 'f3',
        code: 'coddef',
        index: 2,
        name: 'Số nhà',
        type: 'number',
        value: 3,
        required: true,
        class: 'col-12 col-md-6',
        min: 0,
        max: 2
      },
      {
        id: 'f4',
        code: 'coddef4',
        index: 5,
        name: 'Ngày',
        type: 'date',
        value: undefined,
        disabled: false,
        class: 'col-12 col-md-6',
        required: true
      },
      {
        id: 'f6',
        code: 'coddef4',
        index: 6,
        name: 'Địa chỉ',
        type: 'text',
        value: undefined,
        disabled: false,
        class: 'col-12 col-md-12',
        required: true,
        formular: 'f3+f2+f1'
      },
      {
        id: 'f5',
        code: 'coddef5',
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
              },
              {
                surname: 'Nguyễn Châu',
                lastname: 'Giang',
                ages: 50
              }
            ]
          }
        ]
      }
    ]
  }]

  ac(obj: FormField) {
    console.log(obj);
  }
}
