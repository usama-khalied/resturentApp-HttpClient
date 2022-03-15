import { Component, OnInit } from '@angular/core';
import { RestoService } from '../shared/resto.service';
@Component({
  selector: 'app-full-detailed',
  templateUrl: './full-detailed.component.html',
  styleUrls: ['./full-detailed.component.css'],
})
export class FullDetailedComponent implements OnInit {
  constructor(public service: RestoService) {}
  detailed: any = [];
  ngOnInit(): void {
    this.service.getList().subscribe((res) => {
      this.detailed = res;
    });
  }
}
