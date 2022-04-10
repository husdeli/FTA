import React from 'react';
import { DropZone } from '@ui';
import { DropInfo } from './ui/dropInfo';
import { DropActions } from './ui/dropActions';

function App() {
  return (
    <main>
      <div className="h-screen bg-primary-500 flex flex-col justify-center items-center">
        <h1 className="text-6xl text-slate-50 font-serif font-bold">
          Drop the file
        </h1>
        <DropZone />
        <DropInfo />
        <DropActions />
      </div>
    </main>
  );
}

export default App;
