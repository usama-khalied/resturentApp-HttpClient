import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../shared/resto.service';
@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  alert: boolean = false;
  [x: string]: any;
  editResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  })
  restoData: any = {};
  constructor(private router: ActivatedRoute, private resto: RestoService) { }
  ngOnInit(): void {
    // console.warn(this.router.snapshot.params['id'])
    this.resto.getCurrentResto(this.router.snapshot.params['id']).subscribe((result) => {
      this.restoData = result;
      this.editResto = new FormGroup({
        name: new FormControl(this.restoData.name),
        email: new FormControl(this.restoData.email),
        address: new FormControl(this.restoData.address),
      })
    })
  }
  getCollection() {
    this.resto.postCurrent(this.router.snapshot.params['id'], this.editResto.value).subscribe((result) => {
      this.alert = true;
    })
  }
  closeAlert() {
    this.alert = false;
  }
}
