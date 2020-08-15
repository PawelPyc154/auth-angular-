import { AbstractControl } from '@angular/forms';

export const required = (name: string, message: string) => {
  return (control: AbstractControl) => {
    if (control.value === '') {
      return {
        message,
      };
    }
    return null;
  };
};
