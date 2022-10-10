import { Component, ViewChild, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @ViewChild('form') p: any;
  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.p.value);
  }
}
