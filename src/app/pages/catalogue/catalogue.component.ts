import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/data/products';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  products = products
  constructor() { }

  ngOnInit(): void {
  }

}
