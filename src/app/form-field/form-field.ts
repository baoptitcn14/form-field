export class FormField {
    id: string | undefined;
    index: number | undefined;
    name: string | undefined;
    code: string | undefined;
    type: "form" | "group" | "text" | "number" | "select" | "multiple-select" | "date" | "date-range" | "table" | "checkbox" | "radio" | "group_radio" | "group_checkbox" | "file" | undefined;
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
    dataSource?: any[] | undefined;
    _dataSource?: any[] | undefined;
    items?: FormField[] | undefined;
    // group
    alignName?: "center" | "left" | "right";
    //file, select
    multiple?: boolean;
    
}

export class Errors {
    required?: string | undefined;
    regex?: string | undefined;
    min?: string | undefined;
    max?: string | undefined;
}

export class FormulaEmitterInput {
    formulaRefIds: string[] | undefined;
    value: string | number | Date | undefined;
    id: string | undefined;
}

// export class FormulaEmitterInput {
//     formulaRefIds: string[] | undefined;
//     value: string | number | Date | undefined;
//     id: string | undefined;
// }

