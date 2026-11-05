import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function rangeDateValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    const year = control.value;

    if (year >= min && year <= max) {
      return null;
    }
    return {min : {min: min, max: max } };
    };
  }
