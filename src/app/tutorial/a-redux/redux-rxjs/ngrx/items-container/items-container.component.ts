import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalService } from '../../../../../core/global.service';
import { GetAll, Post } from '../store/root/items/items.actions';
import {
  completedOkSelector,
  messageSelector
} from '../store/root/items/items.state';
import { RootState } from '../store/root/root.state';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styles: []
})
export class ItemsContainerComponent implements OnInit {
  public itemsRedux$: Observable<any[]>;
  public item: any = { description: '' };
  constructor(
    private store: Store<RootState>,
    private globalService: GlobalService
  ) {}

  public ngOnInit() {
    this.itemsRedux$ = this.store.select('items', 'data');
    this.store.dispatch(new GetAll());
    this.store
      .select(messageSelector)
      .subscribe(message => this.globalService.setMessage(message));
    this.store.select(completedOkSelector).subscribe(isOk => {
      if (isOk) {
        console.log('Job done!');
      } else {
        console.log('Working on it.');
      }
    });
  }

  public onSaveClick() {
    this.store.dispatch(new Post(this.item));
  }
}
