import { Component, OnInit , NgIterable } from '@angular/core';
import { RestoService } from '../shared/resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
 

collection:any = [

];

  constructor(private resto : RestoService) { }

  ngOnInit(): void {
this.resto.getList().subscribe((result) => {

  this.collection=result;

})}

deleteResto(list:any) {
  console.warn(list)
this.resto.DeleteResto(list).subscribe((result)=>{
this.collection.splice(list-1 , 1)
})
}
}


