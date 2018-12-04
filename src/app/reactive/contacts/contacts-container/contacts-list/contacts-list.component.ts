import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styles: []
})
export class ContactsListComponent implements OnInit {
  @Input() public items: any[];
  constructor() {}

  ngOnInit() {}
}
