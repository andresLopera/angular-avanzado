import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-contacts-container',
  templateUrl: './contacts-container.component.html',
  styles: []
})
export class ContactsContainerComponent implements OnInit {
  public item = {
    _id: null,
    name: 'a',
    birthDate: null,
    email: '',
    phone: 5
  };
  public items$: Subject<any[]> = new Subject();
  private items = [];
  constructor() {}

  public ngOnInit() {}

  public onSave(newItem: { _id: null | number }) {
    if (this.isReallyNew(newItem)) {
      this.insertNewItem(newItem);
    } else {
      this.updateCurrentItem(newItem);
    }
    this.items$.next(this.items);
  }

  private isReallyNew(newItem: { _id: null | number }) {
    return newItem._id === null;
  }
  private updateCurrentItem(newItem: { _id?: number }) {
    this.items[newItem._id] = { ...newItem };
  }
  private insertNewItem(newItem: { _id: number }) {
    this.items.push({ ...newItem, _id: this.items.length });
  }
}
