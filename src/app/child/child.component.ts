import { Component, OnInit, Input, Injectable , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() data :any | undefined;
outputString = "Hellow parent"
  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }
@Output() datachild : EventEmitter<string> = new EventEmitter()




senddata() {
this.datachild.emit(this.outputString);
}
}
