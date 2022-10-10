import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoCardComponent } from './promo-card/promo-card.component';
import { ProductItemComponent } from './product-item/product-item.component';


@NgModule({
  declarations: [
    PromoCardComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PromoCardComponent,
    ProductItemComponent
  ]
})
export class SharedModule { }
