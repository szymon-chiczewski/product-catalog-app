import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  newProduct = { code: '', name: '', price: 0 };

  constructor(private productService: ProductService) {}

  onSubmit() {
    this.productService.addProduct(this.newProduct).subscribe(() => {
      this.newProduct = { code: '', name: '', price: 0 };
    });
  }
}