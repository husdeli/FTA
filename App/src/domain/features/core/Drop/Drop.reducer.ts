import { DropStoreSnapshot, DropAction } from './Drop.types';

export function DropReducer(prevState: DropStoreSnapshot, action: DropAction) {
  switch (action.type) {
    case 'CORE_RESET_DROP': {
      return {
        drop: action.payload
      };
    }
    case 'CORE_SET_DROP': {
      return {
        drop: action.payload
      };
    }
    default: {
      return prevState;
    }
  }
}
