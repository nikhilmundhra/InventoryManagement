import { Component, OnInit } from '@angular/core';
import { IVendor } from './vendor';
import { ProductService } from '../product/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'vendor',
    templateUrl: './vendor.component.html',
    styleUrls: ['./vendor.component.css']
})

export class VendorComponent implements OnInit {
    vendor: IVendor;

    constructor(private _productService: ProductService, private _activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        let VendorId: number = this._activatedRoute.snapshot.params['id'];
        this._productService.getVendorByID(VendorId)
            .subscribe((vendorData) => this.vendor = vendorData);
    }
}