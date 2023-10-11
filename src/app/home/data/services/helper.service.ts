import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  isValidYear(control: any): { [key: string]: boolean } | null {
    const year = control.value;

    // Check if the input is a valid year (e.g., between 1900 and the current year)
    const currentYear = new Date().getFullYear();
    if (isNaN(year) || year < 1900 || year > currentYear) {
      return { 'invalidYear': true };
    }

    return null;
  }
}
