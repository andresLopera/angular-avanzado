import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface ItemState {
  data: any;
}
export const INITIAL_ITEM_STATE: ItemState = {
  data: {}
};
const featureSelector = createFeatureSelector('item');
export const dataSelector = createSelector(
  featureSelector,
  (state: ItemState) => state.data
);
