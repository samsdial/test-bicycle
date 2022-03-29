import React from 'react';
import ReactDOM from 'react-dom';
import BootstrapProvider from '@bootstrap-styled/provider';
import makeAppTheme from './style/app.theme'
import './index.sass'

import App from './App/App';
import { Provider } from 'react-redux';
import store from './store';

const appTheme = makeAppTheme({
  '$body-bg': 'transparent',
  'width': '100%'
})

ReactDOM.render(
  <BootstrapProvider theme={appTheme}>
    <Provider store={store} >
      <App />
    </Provider>
  </BootstrapProvider>,
  document.getElementById('root')
);
