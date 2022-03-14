import { Component, OnInit, NgIterable } from '@angular/core';
import { RestoService } from '../shared/resto.service';
import * as _ from 'lodash'
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css'],
})
export class ListRestoComponent implements OnInit {
<<<<<<< HEAD
  name: string;
  searchValue: any;

  collection: any = [];
sourceFile :any = [];
  constructor(private resto: RestoService) { }

  ngOnInit(): void {
    this.resto.getList().subscribe((result) => {

      this.collection = result;

    })
  }

  deleteResto(list: any) {
    console.warn(list)
    this.resto.DeleteResto(list).subscribe((result) => {
      this.collection.splice(list - 1, 1)
    })
  }
//   filterevent(event : Event){
//     this.searchValue = (event.target as HTMLInputElement).value;
// if(!this.searchValue) {
// this.sourceFile = _.cloneDeep(this.collection);
// return;

// }
// console.log(this.sourceFile)
// this.sourceFile = this.collection.filter((list:any) => {
// return Object.keys(list).some((key) => {
// return String (list[key]).toLowerCase().includes(this.searchValue.toLowerCase());
// })
// })
//   }
// Search(){
//   this.collection = this.collection.filter((res : string ) => {
// return res..toLowerCase().match(this.collection.name.toLowerCase());

//   })

  
// }


=======
  collection: any = [];

  constructor(private resto: RestoService) {}

  ngOnInit(): void {
    this.resto.getList().subscribe((result) => {
      this.collection = result;
    });
  }

  deleteResto(list: any) {
    console.warn(list);
    this.resto.DeleteResto(list).subscribe((result) => {
      this.collection.splice(list - 1, 1);
    });
  }
>>>>>>> 5005402d8b99c1fc06e468ee60c874dcb099ce53
}
