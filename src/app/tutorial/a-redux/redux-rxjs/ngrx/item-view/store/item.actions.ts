import { Action } from '@ngrx/store';

export enum ItemActionTypes {
  Get = '[ItemsApiService] Get Command',
  GetOk = '[ItemsApiService] Get OK Event',
  GetError = '[ItemsApiService] Get Error Event'
}

export class Get implements Action {
  readonly type = ItemActionTypes.Get;
  constructor(public readonly payload: number) {}
}

export class GetOk implements Action {
  readonly type = ItemActionTypes.GetOk;
  constructor(public readonly payload: any) {}
}

export class GetError implements Action {
  readonly type = ItemActionTypes.GetError;
  constructor(public readonly payload: string) {}
}

export type ItemActions = Get | GetOk | GetError;
