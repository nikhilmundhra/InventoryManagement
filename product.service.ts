import { Injectable } from '@angular/core';
import { IProduct, IProduct1 } from './product';
import { IProductType } from '../productType/productType';
import { IVendor } from '../vendor/vendor';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {
    baseUrl: string = 'http://localhost:52427/api/Product/'

    constructor(private _http: Http) {

    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get(this.baseUrl+"GetAll")
            .pipe(map((response: Response) => <IProduct[]>response.json()));
    }

    getProductById(id: number): Observable<IProduct> {
        return this._http.get(this.baseUrl + id)
            .pipe(map((response: Response) => <IProduct>response.json()));
    }

    getProductTypeByID(TypeId: number): Observable<IProductType> {
        return this._http.get("http://localhost:52427/api/ProductType/" + TypeId)
            .pipe(map((response: Response) => <IProductType>response.json()));
    }

    getVendorByID(vendorId: number): Observable<IVendor> {
        return this._http.get("http://localhost:52427/api/vendor/" + vendorId)
            .pipe(map((response: Response) => <IVendor>response.json()));
    }

    

    saveProduct(pro: IProduct) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers, method: RequestMethod.Post });
        return this._http.post(this.baseUrl + 'saveProduct', pro)
            .pipe(map((response: Response) => response.json()));
    }
    
}