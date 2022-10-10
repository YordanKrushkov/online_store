import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  time: string = ''
  constructor() { }


  ngOnInit(): void {
    setInterval(() => {
      const date = new Date();
      let hour = date.getHours()
      let minutes = date.getMinutes()
      let seconds = date.getSeconds();
      this.time = `${hour} : ${minutes} : ${seconds}`;

    }, 1000)
  }
}
