import { Action } from '@ngrx/store';

export enum ItemActionTypes {
  GetAll = '[ItemsApiService] Get All Command',
  GetAllOk = '[ItemsApiService] Get All OK Event',
  GetAllError = '[ItemsApiService] Get All Error Event',
  Post = '[ItemsApiService] Post Command',
  PostOk = '[ItemsApiService] Post OK Event',
  PostError = '[ItemsApiService] Post Error Event'
}

export class GetAll implements Action {
  readonly type = ItemActionTypes.GetAll;
  constructor() {}
}

export class GetAllOk implements Action {
  readonly type = ItemActionTypes.GetAllOk;
  constructor(public readonly payload: any[]) {}
}

export class GetAllError implements Action {
  readonly type = ItemActionTypes.GetAllError;
  constructor(public readonly payload: string) {}
}

export class Post implements Action {
  readonly type = ItemActionTypes.Post;
  constructor(public readonly payload: any) {}
}

export class PostOk implements Action {
  readonly type = ItemActionTypes.PostOk;
  constructor(public readonly payload: any) {}
}

export class PostError implements Action {
  readonly type = ItemActionTypes.PostError;
  constructor(public readonly payload: string) {}
}

export type ItemActions =
  | GetAll
  | GetAllOk
  | GetAllError
  | Post
  | PostOk
  | PostError;
