import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import {RestoService} from '../shared/resto.service'
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
  alert : boolean = false;
addResto = new FormGroup({
name : new FormControl(''),
email : new FormControl(''),
address : new FormControl(''),
})
  constructor(private resto : RestoService) { }
collectResto(){                                         
this.resto.saveResto(this.addResto.value).subscribe((result)=> {
this.alert = true;
this.resto.getList();
});
this.addResto.reset();
}
  ngOnInit(): void {
  }
closeAlert(){
this.alert=false;
}
}
