import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  foodName:string | undefined
  image:string | undefined
  categoryList:any[]=[]
  constructor(private master:MasterService, private router:Router) { }

  ngOnInit(): void {
    this.loadAllFoodCategories();
  }
  loadAllFoodCategories(){
    this.master.getAllFoodCategory().subscribe((result:any)=>{
      if(result) {
        this.categoryList=result.data;
        console.warn(this.categoryList);
      }
    });
  }

  navigate(id:number){
    console.warn(id)
    this.router.navigate(['/restaurant-items',id]);
  }

}
