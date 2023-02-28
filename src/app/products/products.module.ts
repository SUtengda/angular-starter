import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './components/product/product.component';
import { FilterPipe } from './pipes/filter.pipe';
import { UniqueCategoriesPipe } from './pipes/uniqueCategories.pipe';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { TotalProductCountPipe } from './pipes/totalProductCount.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgSelectModule, 
    FormsModule,
    SharedModule
  ],
  declarations: [
    ProductsComponent,
    ProductComponent,
    FilterPipe,
    UniqueCategoriesPipe,
    TotalProductCountPipe
  ]
})
export class ProductsModule { }
