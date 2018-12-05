import { Action } from '@ngrx/store';

export enum GlobalActionTypes {
  IncrementCallsCounter = '[HttpService] Increment Calls Counter'
}

export class IncrementCallsCounter implements Action {
  readonly type = GlobalActionTypes.IncrementCallsCounter;
  constructor() {}
}

export type GlobalActions = IncrementCallsCounter;
