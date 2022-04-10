import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalWorkerOptions } from 'pdfjs-dist';
import App from './App';
import { DropStoreProvider } from './providers/DropStoreProvider';

import './index.css';

GlobalWorkerOptions.workerSrc = './node_modules/pdfjs-dist/build/pdf.worker.js';

ReactDOM.render(
  <React.StrictMode>
    <DropStoreProvider>
      <App />
    </DropStoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
