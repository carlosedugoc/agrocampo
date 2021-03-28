import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './containers/header/header.component';
import { MegaMenuComponent } from './components/mega-menu/mega-menu.component';
import { CartComponent } from './components/cart/cart.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { MobileSearchComponent } from './components/mobile-search/mobile-search.component';
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MenuComponent,
    MegaMenuComponent,
    CartComponent,
    MobileMenuComponent,
    MobileSearchComponent,
    MobileHeaderComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class LayoutModule { }
