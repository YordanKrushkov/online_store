import { Component, OnInit } from '@angular/core';
const submenues = ['Sale', 'Pushchairs', 'Clothing', 'Nursery', 'Car Seats', 'Bathing & Changing', 'Baby Safety', 'Feeding & Weaning', 'Toys & Gifts']
@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
  submenu = submenues;
  constructor() { }

  ngOnInit(): void {
  }

}
