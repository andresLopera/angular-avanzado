import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Get } from '../store/item.actions';
import { dataSelector, ItemState } from '../store/item.state';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styles: []
})
export class ItemViewComponent implements OnInit {
  public item$: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<ItemState>
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(map(params => params['id']))
      .subscribe(id => this.store.dispatch(new Get(id)));
    this.item$ = this.store.select(dataSelector);
  }
}
