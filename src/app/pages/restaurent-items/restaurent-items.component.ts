import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-restaurent-items',
  templateUrl: './restaurent-items.component.html',
  styleUrls: ['./restaurent-items.component.css']
})
export class RestaurentItemsComponent implements OnInit {
  item:any[]=[]
  quantity:number =0;
  address:string=""
  orderObj:any={
    "orderId": 0,
    "userId": 0,
    "orderDate": new Date(),
    "totalAmount": 0,
    "restaurantId": 0,
    "orderNo": "",
    "zomatoOrderItem": [
      {
        "orderItemId": 0,
        "orderId": 0,
        "itemId": 0,
        "quantity": 1
      }
    ]
  }

  order:any = {
    "userId": 0,
    "totalAmount": 0,
    "restaurantId": 0,
    "deliveryAddress": ""
  }

  selectedFoodItem:any;

  constructor(private activated:ActivatedRoute,private master:MasterService) { 
    this.activated.params.subscribe((result:any)=>{
      const id=result.categoryname;
      this.loadFoodItemsByCategory(id);
    });

    const logged  = localStorage.getItem("zomatoUser");
    if(logged) {
      const data = JSON.parse(logged);
      console.warn(data.userId);
      
      this.orderObj.userId = data.userId
      this.order.userId = data.userId;
    }
  }
  
  ngOnInit(): void {
  }

  placeOrder(){
    debugger;
    const itemObj={
      "orderItemId": 0,
        "orderId": 0,
        "itemId": this.selectedFoodItem.itemId,
        "quantity": this.quantity
    }
    this.orderObj.restaurantId=this.selectedFoodItem.restaurantId;
    this.orderObj.zomatoOrderItem.push(itemObj);

    this.order.totalAmount = this.selectedFoodItem.price * this.quantity;
    this.order.deliveryAddress = this.address;
    this.order.restaurantId = this.selectedFoodItem.restaurantID;
    this.master.placeOrder(this.order).subscribe((result:any)=>{
      if(result.result){
        alert("Order Placed")
      }
      else{
        alert(result.message)
      }
    });
  }


  loadFoodItemsByCategory(id:number){
    this.master.getItemsByRestaurantByCategory(id).subscribe((result:any)=>{
      this.item=result.data;
      console.warn(result);
      
    });
  }

  openQtyModal(category:any){
    debugger
    const modal = document.getElementById('myModal');
    if(modal!=null){
      modal.style.display="block";
    }
    this.selectedFoodItem=category;
  }

  closeQtyModal(){
    const modal = document.getElementById('myModal');
    if(modal!=null){
      modal.style.display="none ";
    }
  }

}
