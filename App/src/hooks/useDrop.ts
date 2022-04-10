import { useContext } from 'react';
import { resetDrop, setDrop } from '@domain/core';
import { DropStoreContext } from '../providers/DropStoreProvider';

export function useDrop() {
  const dropContext = useContext(DropStoreContext);

  if (!dropContext) {
    throw new Error('Provider is not found');
  }

  return {
    state: dropContext.state,
    setDrop: (drop: File) => dropContext.dispatch(setDrop(drop)),
    resetDrop: () => dropContext.dispatch(resetDrop())
  };
}
