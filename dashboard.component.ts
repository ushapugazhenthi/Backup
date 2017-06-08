import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
 
})
export class DashboardComponent {
toShowTheAdvancedSearch:boolean=true;

onClickShowTheForm(){
  console.log("Hello Usha");
  this.toShowTheAdvancedSearch= !this.toShowTheAdvancedSearch;
  console.log(this.toShowTheAdvancedSearch);
}
}