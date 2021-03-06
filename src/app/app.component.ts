import { Component, VERSION, OnInit,OnDestroy } from '@angular/core';
import {Router,Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError

} from '@angular/router';
import {PdsApiService} from './pds-api.service';
//import * as r from  'rxjs';
//import {SweetService} from './sweet.service';
//import { transition, style, animate, trigger } from '@angular/animations';
//import {HttpClient, HttpHeaders} from "@angular/common/http";




@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit,OnDestroy  {
  url='';
  tabView : Boolean = true;  
  name = 'Angular ' + VERSION.major;
    text = 'Welcome to PENNA DELIVERY SERVICES!!!!!!';
   // Sets initial value to true to show loading spinner on first load
  load = true;
  users :any ;
//subsc : r.Subscription;
  constructor(private router: Router,
  private api:PdsApiService) {


    this.router.events.subscribe((e : RouterEvent) => {
      this.navigationInterceptor(e);
     })
  }
 ngOnInit() {
    // this.api.getClients()
    //     .subscribe(data =>{
    //       console.log(data); 
        
    //        }
    //        );
    //this.swServ.showSuccessMessage('Sucess!!','we didit');
    //this.swServ.showMessage('SomethingWent','wrong');
    //this.swServ.showWarning('Delete it')
 }

  // // Shows and hides the loading spinner during RouterEvent changes
   navigationInterceptor(event: RouterEvent): void {
     //this.load = true;
   
      if (event instanceof NavigationStart) {
      this.load = true;
    }
    if (event instanceof NavigationEnd) {
        //console.log(event.urlAfterRedirects)
        this.url = event.urlAfterRedirects;
        if(this.url == '/register')
        {
          this.tabView = false;
            //   this.subsc = this.vServ.view.subscribe(
            //   (val:Boolean)=>{
            //     this.tabView = val;
            //   }
            // );

        }
        else{this.tabView=true;}
      setTimeout(() => { // here
        this.load = false;
      }, 2000);
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      setTimeout(() => { // here
        this.load = false;
      }, 2000);
    }
    if (event instanceof NavigationError) {
      setTimeout(() => { // here
        this.load = false;
      }, 2000);
    }
    //  setTimeout( () => { 
    //   this.load = false;
      
    //  },7000)
  //   setTimeout( () => { /*Your Code*/ 
  //   if (event instanceof NavigationStart) {
  //     this.loading = true
  //   }
  //   if (event instanceof NavigationEnd) {
  //     this.loading = false
  //   }

  //   // Set loading state to false in both of the below events to hide the spinner in case a request fails
  //   if (event instanceof NavigationCancel) {
  //     this.loading = false
  //   }
  //   if (event instanceof NavigationError) {
  //     this.loading = false
  //   }
  //   }, 7000 );
   }
     ngOnDestroy(){
    //this.subsc.unsubscribe();
  }
}
