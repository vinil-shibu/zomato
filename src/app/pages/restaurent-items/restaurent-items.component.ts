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
  constructor(private activated:ActivatedRoute,private master:MasterService) { 
    this.activated.params.subscribe((result:any)=>{
      const id=result.categoryname;
      this.loadFoodItemsByCategory(id);
    });
  }
  
  ngOnInit(): void {
  }
  loadFoodItemsByCategory(id:number){
    this.master.getItemsByRestaurantByCategory(id).subscribe((result:any)=>{
      this.item=result.data;
      console.warn(result);
      
    });
  }

}
