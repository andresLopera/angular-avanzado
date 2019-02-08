import { ItemActions, ItemActionTypes } from './item.actions';
import { INITIAL_ITEM_STATE, ItemState } from './item.state';

export function itemReducer(
  state = INITIAL_ITEM_STATE,
  action: ItemActions
): ItemState {
  let result: ItemState;
  switch (action.type) {
    case ItemActionTypes.Get:
      result = { data: { _id: action.payload } };
      break;
    case ItemActionTypes.GetOk:
      result = { ...state, data: action.payload };
      break;
    case ItemActionTypes.GetError:
      result = { ...state };
      break;
    default:
      result = { ...state };
      break;
  }
  return result;
}
