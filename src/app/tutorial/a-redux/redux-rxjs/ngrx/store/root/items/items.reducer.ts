import { ItemsActions, ItemsActionTypes } from './items.actions';
import { INITIAL_ITEMS_STATE, ItemsState } from './items.state';

export function itemsReducer(
  state = INITIAL_ITEMS_STATE,
  action: ItemsActions
): ItemsState {
  let result: ItemsState;
  switch (action.type) {
    case ItemsActionTypes.GetAll:
      result = {
        ...state,
        data: [],
        working: true,
        completedOk: false,
        message: 'loading items...'
      };
      break;
    case ItemsActionTypes.GetAllOk:
      result = {
        ...state,
        data: action.payload,
        working: false,
        completedOk: true,
        message: 'items loaded'
      };
      break;
    case ItemsActionTypes.GetAllError:
      result = {
        ...state,
        data: [],
        working: false,
        completedOk: false,
        message: action.payload
      };
      break;
    case ItemsActionTypes.Post:
      result = {
        ...state,
        working: true,
        completedOk: false,
        message: 'saving item...'
      };
      break;
    case ItemsActionTypes.PostOk:
      result = {
        ...state,
        data: [...state.data, action.payload],
        working: false,
        completedOk: true,
        message: 'item saved'
      };
      break;
    case ItemsActionTypes.PostError:
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
