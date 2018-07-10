import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'list-product',
    templateUrl: './productList.component.html',
    styleUrls: ['./productList.component.css']
})

export class ProductListComponent implements OnInit {
    products: IProduct[];

    constructor(private _productService: ProductService) {
        
    }

    ngOnInit() {
        this._productService.getProducts()
            .subscribe((productData) => {
                this.products = productData
                console.log(this.products);
            });
    }
}