import { ValidatorFn, AbstractControl } from '@angular/forms';

export function FutureDateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const selectedDate = control.value;
    let result = new Date();
    result.setDate(result.getDate() + 1);
    const currentDate = result.getDate();
    if (selectedDate >= currentDate) {
      return { 'futureDate': true };
    }
    return null;
  };
}