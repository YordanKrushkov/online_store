import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { ProductViewComponent } from './pages/product-page/product-view/product-view.component';
import { LoginComponent } from './pages/login/login.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'catalogue',
    component: CatalogueComponent
  },
  {
    path: 'product/:id',
    component: ProductViewComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
export const AppRoutingModule = RouterModule.forRoot(routes)
