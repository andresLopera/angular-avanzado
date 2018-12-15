import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ItemsApiService } from '../../../../core/items-api.service';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styles: []
})
export class ItemContainerComponent implements OnInit {
  public item$: Observable<any>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemsApiService: ItemsApiService
  ) {}

  public ngOnInit() {
    this.item$ = this.route.params.pipe(
      map(params => params['id']),
      switchMap(paramId => this.itemsApiService.getById$(paramId))
    );
  }

  public onDelete(item) {
    const subs$ = this.itemsApiService.deleteById$(item._id).subscribe(() => {
      subs$.unsubscribe();
      this.router.navigate(['../items']);
    });
  }
}
