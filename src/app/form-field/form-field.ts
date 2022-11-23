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
    dataSource?: any[] | undefined;
    value: string | number | Date | undefined;
    class?: string | undefined;
    referenceIds?: string[] | undefined;
    disabled?: boolean = false;
    required?: boolean = false;
    regex?: RegExp;
    icon?: string;
    min?: number;
    max?: number;
}

export class Errors {
    required?: string | undefined;
    regex?: string | undefined;
    min?: string | undefined;
    max?: string | undefined;
}

