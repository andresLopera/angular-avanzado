import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styles: []
})
export class ItemsListComponent implements OnInit {
  public items = [{ _id: 'asdfa', description: 'hola' }];
  constructor() {}

  ngOnInit() {}
}
