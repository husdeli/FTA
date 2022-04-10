import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  useMemo,
  useReducer
} from 'react';
import {
  DropAction,
  DropInitial,
  DropReducer,
  DropStoreSnapshot
} from '@domain/core';

export const DropStoreContext = createContext<
  { state: DropStoreSnapshot; dispatch: Dispatch<DropAction> } | undefined
>(undefined);

export function DropStoreProvider({ children }: PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer(DropReducer, DropInitial);
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <DropStoreContext.Provider value={value}>
      {children}
    </DropStoreContext.Provider>
  );
}
