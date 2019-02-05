import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface ItemsState {
  data: any[];
  working: boolean;
  completedOk: boolean;
  message: string;
}
export const INITIAL_ITEMS_STATE: ItemsState = {
  data: [],
  working: false,
  completedOk: false,
  message: ''
};

const featureSelector = createFeatureSelector('items');
export const messageSelector = createSelector(
  featureSelector,
  (state: ItemsState) => state.message
);
export const completedOkSelector = createSelector(
  featureSelector,
  (state: ItemsState) => state.completedOk
);
