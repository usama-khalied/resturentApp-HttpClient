import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../shared/resto.service';
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css'],
})
export class AddRestoComponent implements OnInit {
  variable: any = 1;
appointMentTime  : N
// today : Date =  new Date();

  alert: boolean = false;
  addResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    department: new FormControl(''),
    education: new FormControl(''),
    fathername: new FormControl(''),
    hobies: new FormControl(''),
    telephoneNo: new FormControl(''),
    Skills: new FormControl(''),
    gender: new FormControl(''),
  });
  constructor(private resto: RestoService) {}
  collectResto() {
    this.resto.saveResto(this.addResto.value).subscribe((result) => {
      this.alert = true;
      this.resto.getList();
      this.variable = 1;
    });
    this.addResto.reset();
  }
  ngOnInit(): void {
    Date myDate = new Date(
      appointmentTime.year,
      appointmentTime.month,
      appointmentTime.day);


  }
  closeAlert() {
    this.alert = false;
  }
  next() {
    this.variable += 1; //variable = variable1 + 1 = 2
  }
  previouse() {
    this.variable -= 1; //variable = variable3 - 1 = 2
  }
}
