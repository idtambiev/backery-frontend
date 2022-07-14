import { Component, OnInit } from '@angular/core';
import { BunTypes } from '@enums/bun-type';
import { BunModel } from '@interfaces/bun.model';
import { interval } from 'rxjs';

@Component({
  selector: 'app-buns-list',
  templateUrl: './buns-list.component.html',
  styleUrls: ['./buns-list.component.scss']
})
export class BunsListComponent implements OnInit {
  dataSource: BunModel[] = [{
    id: 0,
    type: BunTypes.Baguette,
    startPrice: 90,
    currentPrice: 80,
    nextPrice: 70,
    timeToChange: new Date(),
    name: "Baguette"
  }];

  displayedColumns: string[] = ['id', 'type', 'startPrice', 'currentPrice', 'nextPrice', 'timeToChange'];
  constructor() { }

  ngOnInit(): void {
    interval(60000)
    .subscribe((val) => {
      console.log(val);
    })
  }

}
