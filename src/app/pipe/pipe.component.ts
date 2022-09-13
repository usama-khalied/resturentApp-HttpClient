import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styles: [
  ]
})
export class PipeComponent implements OnInit {
  title = "This si title "
dd = Date()
  constructor() { }

  ngOnInit(): void {
  }
capString(item:string) {
  return item.toUpperCase()
}
small = "Hellow lower case"
Angular = "Angular Pipes Params"

user = {
  name : "Usama",
  email:"usamakhalied@gmail.com"
}

}
