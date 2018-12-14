import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 App!';
  // declared array of months
  months = ["January","February","March","April","May",
  	   "June","July","August","September",
	   "October","November","December"];
  isavailable = true;
  myClickFunction(event) {
    this.isavailable = !this.isavailable;
    console.log(event);
  } 
  changeMonths(event) {
    console.log("Changed month from the Dropdown");
    console.log(event.target.value);
  }
}

