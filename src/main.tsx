import App from './App';
import './index.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import '../i18next.ts';

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(<App />);
