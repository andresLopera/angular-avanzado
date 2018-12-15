import { ItemActions, ItemActionTypes } from './items.actions';
import { INITIAL_ITEMS_STATE, ItemsState } from './items.state';

export function itemsReducer(
  state = INITIAL_ITEMS_STATE,
  action: ItemActions
): ItemsState {
  let result: ItemsState;
  switch (action.type) {
    case ItemActionTypes.GetAll:
      result = {
        ...state,
        data: [],
        working: true,
        completedOk: false,
        message: 'loading items...'
      };
      break;
    case ItemActionTypes.GetAllOk:
      result = {
        ...state,
        data: action.payload,
        working: false,
        completedOk: true,
        message: 'items loaded'
      };
      break;
    case ItemActionTypes.GetAllError:
      result = {
        ...state,
        data: [],
        working: false,
        completedOk: false,
        message: action.payload
      };
      break;
    case ItemActionTypes.Post:
      result = {
        ...state,
        working: true,
        completedOk: false,
        message: 'saving item...'
      };
      break;
    case ItemActionTypes.PostOk:
      result = {
        ...state,
        data: [...state.data, action.payload],
        working: false,
        completedOk: true,
        message: 'item saved'
      };
      break;
    case ItemActionTypes.PostError:
      result = {
        ...state,
        working: false,
        completedOk: false,
        message: action.payload
      };
      break;
    default:
      result = { ...state };
      break;
  }
  return result;
}
