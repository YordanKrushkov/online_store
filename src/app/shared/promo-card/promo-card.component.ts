import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Ipromo } from 'src/app/interfaces/ipromo';


@Component({
  selector: 'app-promo-card',
  templateUrl: './promo-card.component.html',
  styleUrls: ['./promo-card.component.scss']
})
export class PromoCardComponent implements OnInit {
  @Input() singlePromo: Ipromo = { name: '', img: '' }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  getUrl() {
    return `../../../assets/${this.singlePromo.img}.jpg`
  }

  onClick() {
    this.router.navigate(['/about'])
  }
}
