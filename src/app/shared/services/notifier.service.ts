import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotifierService {
  isHide: boolean = false;

  title: string;
  description: string;

  type: string;

  constructor() {}

  onHandle() {
    this.isHide = !this.isHide;
  }

  success(title: string, description?: string) {
    this.title = title;
    this.description = 'Success';
    this.type = 'success';
    this.onHandle();

    setTimeout(() => {
      this.onHandle();
    }, 3000);
  }

  error(title: string, description?: string) {
    this.title = title;
    this.description = 'Error';
    this.type = 'error';
    this.onHandle();
  }
}
