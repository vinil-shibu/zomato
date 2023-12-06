import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  cartItems: any = {
    items:[]
  }

  constructor(private http:HttpClient) { }

  getAllFoodCategory(){
    return this.http.get("https://freeapi.miniprojectideas.com/api/zomato/GetAllFoodCategory");
  }
  getItemsByRestaurantByCategory(id:number){
    return this.http.get("https://freeapi.miniprojectideas.com/api/zomato/GetFoodItemByCategory?categoryId="+id);
  }
  Login(obj:any){
    return this.http.post('https://freeapi.miniprojectideas.com/api/zomato/Login',obj);
  }
  placeOrder(obj:any){
    return this.http.post("https://freeapi.miniprojectideas.com/api/zomato/AddNewOrder",obj);
  }
}
