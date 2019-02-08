import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ItemsApiService } from '../../../../../../core/items-api.service';
import { Get, GetError, GetOk, ItemActionTypes } from './item.actions';

@Injectable()
export class ItemEffects {
  @Effect()
  public getItemEffect$ = this.actions$.pipe(
    ofType<Get>(ItemActionTypes.Get),
    switchMap(action =>
      this.itemsApiService.getById$(action.payload).pipe(
        map(item => (item ? item : {})),
        map(item => new GetOk(item)),
        catchError(err => of(new GetError(null)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private itemsApiService: ItemsApiService
  ) {}
}
