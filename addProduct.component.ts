import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'add-product',
    templateUrl: './addProduct.component.html'
})
export class AddProductComponent implements OnInit {

    productForm: FormGroup;
    title: string = "Add";
    id: number = 0;

    constructor(private _productService: ProductService, private _fb: FormBuilder, private _router: Router, private _avRoute: ActivatedRoute) {
        this.productForm = this._fb.group({
            ProductId: 0,
            ProductName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
            TypeId: ['', [Validators.required, Validators.pattern("[1-9]")]],
            VendorId: ['', [Validators.required, Validators.pattern("[1-9]")]]
        })
        if (this._avRoute.snapshot.params["id"]) {
            this.id = parseInt(this._avRoute.snapshot.params["id"]);
            console.log(this.id);
        }
    }

    save() {
        

        this._productService.saveProduct(this.productForm.value)
            .subscribe(Id => {
                //alert('Saved Successfully!')
                this._router.navigate(['products', { id: Id }]);
            })
    }

    ngOnInit() {
        if (this.id > 0) {
            this.title = 'Edit';
            this._productService.getProductById(this.id)
                .subscribe(resp => this.productForm.setValue(resp));
        }
    }
}
