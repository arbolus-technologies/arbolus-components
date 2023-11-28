import App from './App';
import './index.scss';
import React from 'react';
import { createRoot } from 'react-dom/client';
import i18n from './i18next';
import { I18nextProvider } from 'react-i18next';

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);
