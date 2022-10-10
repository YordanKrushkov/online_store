import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestClickService {

  constructor() { }

  showTest(): void {
    console.log('test!!!')
  }
}
