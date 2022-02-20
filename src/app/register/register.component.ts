import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RestoService } from '../shared/resto.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })
  alert: boolean = false;
  constructor(private resto : RestoService , private rout : Router) { }
collectlogin(){
  console.log(this.register.value);
  this.resto.register(this.register.value).subscribe((result)=> {
    this.alert = true;
this.rout.navigate(['list'])
  })
}
  ngOnInit(): void {
  }
  closeAlert() {
    this.alert = false;
  }
}
