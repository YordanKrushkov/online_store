import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../../interfaces/index';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})

export class ProductItemComponent implements OnInit {

  @Input() singlePromo: IProduct;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  getUrl() {
    return `../../../assets/${this.singlePromo.img}.jpg`
  }

  onClick(id: number) {
    this.router.navigate(['/product', id],)
  }

}
