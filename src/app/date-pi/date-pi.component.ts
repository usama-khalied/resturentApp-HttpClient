import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-date-pi',
  templateUrl: './date-pi.component.html',
  styleUrls: ['./date-pi.component.css']
})
export class DatePiComponent implements OnInit {
  onclick() {   
    var datevalue = $("#startDate").val(); //get the value of the datepicker element.   
    var dateobject = ej.parseDate(datevalue,"dd/MM/yyyy","en-GB");// converting the value to Dateobject of specific format and culture.   
    alert("ISO value:"+dateobject .toISOString());// Value converted to ISO format will be available in alert textbox.   
}   
  constructor() { }
  ngOnInit(): void {

  }



}





