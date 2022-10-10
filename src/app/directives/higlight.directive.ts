import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appHiglight]'
})
export class HiglightDirective implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
}