import { Component } from '@angular/core';

@Component({

    selector: 'my-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})

export class ProductComponent {
    Name: string = 'Cheese';
    Type_ID: number = 1;
    Vendor_ID: number = 3;
}