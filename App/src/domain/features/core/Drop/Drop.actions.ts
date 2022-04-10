import { DropAction } from './Drop.types';

export function setDrop(drop: File): DropAction {
  return {
    type: 'CORE_SET_DROP',
    payload: drop
  };
}

export function resetDrop(): DropAction {
  return {
    type: 'CORE_RESET_DROP',
    payload: null
  };
}
