import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
   selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  title = "This is Directive Element"
addClass = 'special'
isSpecial = false;
inputValue = "test"

style = {
  'font-style':'italic',
  'color': 'blue'
}
onChange(){
  console.log(this.inputValue)
}
  constructor() {

   }

  ngOnInit(): void {
  }
  country = ['india','england','austrailia']

  people :any =[
    {
      "name":"Usama",
      "age":"33",
      "country": "England"
    },
    {
      "name":"Usama",
      "age":"33",
      "country": "Ameria"
    },
    {
      "name":"Usama",
      "age":"33",
      "country": "Pakistan"
    },
    {
      "name":"Usama",
      "age":"33",
      "country": "Afghanistan"
    },
    {

    }
  ]
}
