import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import localeFr from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';

registerLocaleData(localeFr);
@NgModule({
  declarations: [		
    AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    CartModule,
    ProductsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR' 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
