import { AbstractControl, ControlValueAccessor, ValidationErrors, Validator } from "@angular/forms";
import { Errors, Item } from "src/app/form-field/form-field";

export class MBaseInput implements ControlValueAccessor {

    isDisabled: boolean = false;
    value: string | undefined;
    listErrors: { key: string, message: string }[] = [];

    onChange: ((data: any) => void) | undefined;

    writeValue(data: any): void {
        this.value = data ? data : '';
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
    }

    setDisabledState(isDisabled: boolean) {
        this.isDisabled = isDisabled;
    }

    handler() {
        if (this.onChange)
            this.onChange(this.value);
    }

    baseValidate(itemData: Item, controlValue: string) {
        let errors: Errors | undefined;
        const value = controlValue;

        if (itemData.required) {
            if (value == null || value == undefined || value == '') {
                if (!errors) errors = { required: undefined };
                errors.required = 'Không bỏ trống!';
                this.addError('required', 'Không bỏ trống!');
            } else {
                delete errors?.required;
                this.deleteErrorByKey('required');
            }
        }

        if (itemData.regex) {
            let regex = new RegExp(itemData.regex);
            const test = regex.test(value);
            if (!test) {
                if (!errors) errors = { regex: undefined };
                errors.regex = 'Dữ liệu không hợp lệ!';
                this.addError('regex', 'Dữ liệu không hợp lệ!');
            } else {
                delete errors?.regex;
                this.deleteErrorByKey('regex');
            }
        }

        return errors ? errors : undefined;
    }

    protected deleteErrorByKey(key: string) {
        const index = this.listErrors.findIndex(e => e.key == key);
        if (index > -1)
            this.listErrors.splice(index, 1);
    }

    protected addError(key: string, message: string) {
        const index = this.listErrors.findIndex(e => e.key == key);
        if (index < 0)
            this.listErrors.push({
                key: key,
                message: message
            });
    }

}

