export class FormField {
    id: string | undefined;
    index: number | undefined;
    name: string | undefined;
    code: string | undefined;
    type: "form" | "group" | "field" | undefined;
    items: Item[] | undefined;
    class?: string | undefined;
}

export class Item {
    id: string | undefined;
    index: number | undefined;
    name: string | undefined;
    code?: string | undefined;
    type: "text" | "number" | "select" | "date" | "table" | "checkbox" | "radio" | undefined;
    value: string | number | Date | undefined;
    class?: string;
    disabled?: boolean = false;
    required?: boolean = false;
    icon?: string;
    // text | number
    regex?: RegExp;
    // text | number
    formular?: string;
    // number
    min?: number;
    max?: number;
    // select
    isHasSelectAll?: boolean;
    referenceIds?: { id: string, key: string }[];
    // select | table
    search?: boolean;
    dataSource?: any[] | undefined;
    _dataSource?: any[] | undefined;
}

export class Errors {
    required?: string | undefined;
    regex?: string | undefined;
    min?: string | undefined;
    max?: string | undefined;
}

