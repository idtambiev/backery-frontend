import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  dataSource = [];

  displayedColumns: string[] = ['id', 'type', 'startPrice', 'currentPrice', 'nextPrice', 'timeToChange'];
  constructor() { }

  ngOnInit(): void {
  }

}
