import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'm-filter',
  templateUrl: './m-filter.component.html',
  styleUrls: ['./m-filter.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MFilterComponent),
      multi: true
    }
  ]
})
export class MFilterComponent implements OnInit, ControlValueAccessor {

  @Input('filter') filter: MFilter = {
    name: 'default',
    dataSource: []
  }

  onChange: ((data: any) => void) | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(item: any) {
    if(item.active) return;
    this.filter.dataSource.forEach(e => e.active = false);
    item.active = true;

    if (this.onChange)
      this.onChange(item.id);
  }

  get displayName() {
    const o = this.filter.dataSource.find(e => e.active);
    return o ? o.name : '';
  }

  writeValue(obj: any): void {
    if (this.filter.dataSource) {
      let o = this.filter.dataSource.find(e => e.id == obj);
      if (o) o.active = true;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

}

export interface MFilter {
  name: string;
  dataSource: any[]
}
