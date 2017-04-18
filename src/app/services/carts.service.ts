import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class CartsService {

  constructor(private http: Http) { }
getAllCarts(){
  return this.http.get('/api/carts')
            .map(res => res.json());

}

addCart(cart){
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.put("/api/carts", JSON.stringify(cart), { headers: headers }) .map(response => response.json());
}


}
