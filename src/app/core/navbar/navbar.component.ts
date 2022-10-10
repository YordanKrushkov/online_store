import { Component, OnInit } from '@angular/core';


interface IRoute {
  name: string
  path: string
}
const ROUTES = [
  { name: 'Home', path: '' },
  { name: 'About', path: 'about' },
  { name: 'Catalogue', path: 'catalogue' },
  { name: 'Profile', path: 'profile' },
  { name: 'Login', path: 'login' },
  { name: 'Logout', path: 'logout' }
]
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  leftRoutes: IRoute[] = ROUTES.splice(3);
  routes: IRoute[] = ROUTES;

  constructor() { }

  ngOnInit(): void {
  }

}
