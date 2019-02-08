import { Action } from '@ngrx/store';

export enum ItemsActionTypes {
  GetAll = '[ItemsApiService] Get All Command',
  GetAllOk = '[ItemsApiService] Get All OK Event',
  GetAllError = '[ItemsApiService] Get All Error Event',
  Post = '[ItemsApiService] Post Command',
  PostOk = '[ItemsApiService] Post OK Event',
  PostError = '[ItemsApiService] Post Error Event'
}

export class GetAll implements Action {
  readonly type = ItemsActionTypes.GetAll;
  constructor() {}
}

export class GetAllOk implements Action {
  readonly type = ItemsActionTypes.GetAllOk;
  constructor(public readonly payload: any[]) {}
}

export class GetAllError implements Action {
  readonly type = ItemsActionTypes.GetAllError;
  constructor(public readonly payload: string) {}
}

export class Post implements Action {
  readonly type = ItemsActionTypes.Post;
  constructor(public readonly payload: any) {}
}

export class PostOk implements Action {
  readonly type = ItemsActionTypes.PostOk;
  constructor(public readonly payload: any) {}
}

export class PostError implements Action {
  readonly type = ItemsActionTypes.PostError;
  constructor(public readonly payload: string) {}
}

export type ItemsActions =
  | GetAll
  | GetAllOk
  | GetAllError
  | Post
  | PostOk
  | PostError;
