import { Component, OnInit } from '@angular/core';
import { Ipromo } from 'src/app/interfaces/ipromo';

const promo = [
  { name: 'Selected boy\'s clothes', img: 'boys' },
  { name: 'Selected girls\'s clothes', img: 'girls' },
  { name: 'Selected btoys', img: 'toys' },
  { name: 'Selected feeding and weaning', img: 'feed' },
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  promo: Ipromo[] = promo;
  constructor() { }
  ngOnInit(): void {
  }
}
