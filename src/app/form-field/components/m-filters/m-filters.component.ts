import { Component, Input, OnInit } from '@angular/core';
import { MFilter } from '../m-filter/m-filter.component';

@Component({
  selector: 'm-filters',
  templateUrl: './m-filters.component.html',
  styleUrls: ['./m-filters.component.scss']
})
export class MFiltersComponent implements OnInit {

  @Input('filters') filters: MFilters | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface MFilters {
  multi: boolean;
  list: MFilter[]
}
