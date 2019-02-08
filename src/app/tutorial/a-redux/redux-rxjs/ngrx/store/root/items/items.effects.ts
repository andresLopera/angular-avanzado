import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ItemsApiService } from '../../../../../../../core/items-api.service';
import {
  GetAll,
  GetAllError,
  GetAllOk,
  ItemsActionTypes,
  Post,
  PostError,
  PostOk
} from './items.actions';

@Injectable()
export class ItemsEffects {
  @Effect()
  public getItemsEffect$ = this.actions$.pipe(
    ofType<GetAll>(ItemsActionTypes.GetAll),
    switchMap(() =>
      this.itemsApiService.getAll$().pipe(
        map(items => (Array.isArray(items) ? items : [])),
        map(items => new GetAllOk(items)),
        catchError(err => of(new GetAllError(err.message)))
      )
    )
  );

  @Effect()
  public postItemEffect$ = this.actions$.pipe(
    ofType<Post>(ItemsActionTypes.Post),
    switchMap(postAction =>
      this.itemsApiService.post$(postAction.payload).pipe(
        map(item => new PostOk(item)),
        catchError(err => of(new PostError(err.message)))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private itemsApiService: ItemsApiService
  ) {}

  // @Effect()
  // public miEfecto: Observable<Action> = this.actions$.pipe(
  //   filter(accion => accion.type === ItemActionTypes.GetAll),
  //   tap(accion => console.log(accion)),
  //   switchMap(accion =>
  //     this.itemsApiService.getAll().pipe(
  //       map(items => new GetAllOk(items)),
  //       catchError(error => of(new GetAllError(error.message)))
  //     )
  //   )
  // );
}
