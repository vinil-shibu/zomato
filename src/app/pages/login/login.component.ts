import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logreg:boolean=true;
  loginObj: any = {
    "userName": "",
    "password": ""
  }
  constructor(private master:MasterService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.master.Login(this.loginObj).subscribe((result:any)=>{
      if(result.result){
        localStorage.setItem('zomatoUser',JSON.stringify(result.data));
        this.router.navigate(['/'])
      }
      else{
        alert("login unsuccessful")
      }
    });
  }


  registerClick(){
    this.logreg=false;
  }
  loginClick(){
    this.logreg=true;
  }

}
