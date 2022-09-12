
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-res';
  currentItem = 'Television';
  setData(val:any) {
    console.log(val)
  }
  
}
