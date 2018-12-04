import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styles: []
})
export class ItemViewComponent implements OnInit {
  @Input() item: any = 'test';
  constructor() {}

  ngOnInit() {}
}
