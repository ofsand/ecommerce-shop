/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { map, Observable } from 'rxjs';
import { Order } from '../models/orders';
import { OrderItem } from '../models/order-item';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  apiUrlOrders = environment.apiUrl + 'orders'
  apiUrlProducts = environment.apiUrl + 'products'

  constructor(
    private http: HttpClient
  ) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrlOrders}`);
  }

  getOrder(orderId: string): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrlOrders}/${orderId}`)
  }

  getOrderItemByUserId(userId?: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrlOrders}/get/userorders/${userId}`)
  }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrlOrders, order);
  }

  updateOrder(orderStatus: {status: string}, orderId: string): Observable<Order> {
    return this.http.put<Order>(`${this.apiUrlOrders}/${orderId}`, orderStatus)
  }

  deleteOrder(orderId: string) :Observable<Object> {
    return this.http.delete<Object>(`${this.apiUrlOrders}/${orderId}`);
  }

  getOrdersCount(): Observable<number> {
    return this.http.get<number>(`${this.apiUrlOrders}/get/count`)
    .pipe(map((objectValue: any) => objectValue.orderCount));
  }

  getTotalSales(): Observable<number> {
    return this.http.get<number>(`${this.apiUrlOrders}/get/totalsales`)
    .pipe(map((objectValue: any) => objectValue.totalsales));
  }
  //
  getProduct(productId?: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrlProducts}/${productId}`);
  }
}


/*


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  apiUrlCategories = environment.apiUrl + 'categories';

  constructor(private http :HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrlCategories}`);
  }

  getCategory(categoryId: string): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrlCategories}/${categoryId}`);
  }

  createCategory(category: Category):Observable<Category>{
    return this.http.post<Category>(`${this.apiUrlCategories}`, category);
  }

  updateCategory(category: Category):Observable<Category>{
    return this.http.put<Category>(`${this.apiUrlCategories}/${category.id}`, category);
  }

  deleteCategory(categoryId: string):Observable<Object>{
    return this.http.delete<Object>(`${this.apiUrlCategories}/${categoryId}`);
  }
}

*/