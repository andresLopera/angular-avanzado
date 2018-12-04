import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-contacts-container',
  templateUrl: './contacts-container.component.html',
  styles: []
})
export class ContactsContainerComponent implements OnInit {
  public items$: Subject<any[]> = new Subject();
  private items = [];
  constructor() {}

  public ngOnInit() {}

  public onSave(newItem) {
    this.items.push({ ...newItem, _id: this.items.length + 1 });
    this.items$.next(this.items);
  }
}
