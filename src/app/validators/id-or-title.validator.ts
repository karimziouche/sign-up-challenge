import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function isRequiredValidator(firstField: string, secondField: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
    const first = control.get(firstField);
    const second = control.get(secondField);
    if (first?.value || second?.value) {
      return null;
    }
    return { isRequired: true};
  }
}
