import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ShopHeaderComponent} from './layout/shop-header/shop-header.component';
import {TicketComponent} from './layout/ticket/ticket.component';
import {FloatingCartComponent} from './components/floating-cart/floating-cart.component';
import {CateringComponent} from './layout/catering/catering.component';
import {TopUpComponent} from './layout/top-up/top-up.component';
import {httpInterceptorProviders} from "./interceptors";
import {RedirectComponent} from './components/redirect/redirect.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopHeaderComponent,
    TicketComponent,
    FloatingCartComponent,
    CateringComponent,
    TopUpComponent,
    RedirectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
