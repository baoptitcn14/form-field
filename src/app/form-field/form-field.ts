import { MFilters } from "./components/m-filters/m-filters.component";

export class FormField {
    id: string | undefined;
    index: number | undefined;
    name: string | undefined;
    code: string | undefined;
    type: "form" | "group" | "text" | "number" | "select" | "multiple-select" | "date" | "date-range" | "table" | "checkbox" | "radio" | "group_radio" | "group_checkbox" | "file" | "tabs" | undefined;
    value?: any;
    class?: string;
    disabled?: any = false;
    readonly?: boolean = false;
    required?: boolean = false;
    valid?: boolean = true;
    icon?: string;
    formulaRefIds?: string[];
    compairWithRefIds?: string[];
    inline?: boolean;
    inputName?: string;
    // text | number
    regex?: RegExp;
    regexMessageError?: string;
    // text | number
    formular?: string;
    // number
    min?: number;
    max?: number;
    // select
    selectAll?: boolean;
    dataSourceRefIds?: { id: string, key: string }[];
    // select | table
    search?: boolean;
    dataSource?: DataSource[] | undefined;
    _dataSource?: any[] | undefined;
    items?: FormField[] | undefined;
    t_filters?: MFilters | undefined;
    // group
    alignName?: "center" | "left" | "right";
    //file
    multiple?: boolean;
    //multiple select
    numberItemShow?: number;
}

export interface Errors {
    required?: string | undefined;
    regex?: string | undefined;
    min?: string | undefined;
    max?: string | undefined;
}

export interface FormulaEmitterInput {
    formulaRefIds: string[] | undefined;
    value: string | number | Date | undefined;
    id: string | undefined;
}

export interface HeaderTable {
    key: string;
    name: string | undefined;
}

export interface DataSource {
    id?: string;
    name?: string;
    active?: boolean;
    t_headers?: HeaderTable[];
    t_records?: any[];    
}