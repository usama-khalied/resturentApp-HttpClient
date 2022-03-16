import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../shared/resto.service';
@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css'],
})
export class UpdateRestoComponent implements OnInit {
  alert: boolean = false;
  [x: string]: any;
  editResto = new FormGroup({
    //hum ney form declar kiya formGroup = editResto k naam sey
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
  });
  restoData: any = {}; // ek hum ney new json banayiee hai restoData k naam sey
  constructor(private router: ActivatedRoute, private resto: RestoService) {}
  ngOnInit(): void {
    // OnInit k mtlb jo cheezen hamey intially chaiyen sab sey pehley
    this.resto
      .getCurrentResto(this.router.snapshot.params['id']) // q k hum ney routing krtey waqt id phenki list-resto mai to wohi service wala function call kiya aur us k parameter mai hum ney id phenk di
      .subscribe((result) => {
        this.restoData = result; // jo data hamarey paas list sey aa raha hai us ko service k equal krtey huwey ..
        this.editResto = new FormGroup({
          // update wala form jis mai ku6 nh hai us ko liya aur us k formControl mai jo data list-resto sey aa raha hai us k eual kr diya ..!
          name: new FormControl(this.restoData.name),
          email: new FormControl(this.restoData.email),
          address: new FormControl(this.restoData.address),
        });
      });
  }
  getCollection() {
    this.resto
      .postCurrent(this.router.snapshot.params['id'], this.editResto.value)
      .subscribe((result) => {
        this.alert = true;
      });
  }
  closeAlert() {
    this.alert = false;
  }
}
