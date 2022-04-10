export interface DropStoreSnapshot {
  drop: File | null;
}

export type DropActionTypes = 'CORE_SET_DROP' | 'CORE_RESET_DROP';

export interface DropAction {
  type: DropActionTypes;
  payload: null | File;
}
