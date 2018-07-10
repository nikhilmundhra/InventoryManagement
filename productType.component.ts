import { Component, OnInit } from '@angular/core';
import { IProductType } from './productType';
import { ProductService } from '../product/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'product-type',
    templateUrl: './productType.component.html',
    styleUrls: ['./productType.component.css']
})

export class ProductTypeComponent implements OnInit {
    productType: IProductType;

    constructor(private _productService: ProductService, private _activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        let TypeId: number = this._activatedRoute.snapshot.params['id'];
        this._productService.getProductTypeByID(TypeId)
            .subscribe((productTypeData) => this.productType = productTypeData);
    }
}