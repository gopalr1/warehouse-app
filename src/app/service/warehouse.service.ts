import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private http: HttpClient) {
  }

  searchProducts(search, page, size) {
    return this.http.get(environment.endpoint + environment.baseUrl + '/search?productName=' + search + '&page=' + page + '&noOfRecords=' + size);
  }
}
