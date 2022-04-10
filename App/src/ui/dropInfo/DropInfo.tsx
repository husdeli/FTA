import React from 'react';
import { useDrop } from '../../hooks/useDrop';

export function DropInfo() {
  const {
    state: { drop }
  } = useDrop();

  if (!drop) {
    return null;
  }

  return (
    <ul>
      <li>
        <span>{drop.name}</span>
        <span>{drop.type}</span>
      </li>
    </ul>
  );
}
