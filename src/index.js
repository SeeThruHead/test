import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';

const load = () => render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('regex-test')
);

if (module.hot) {
  module.hot.accept('./app', load);
}

load();
