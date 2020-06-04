import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createGlobalStyle } from 'styled-components'


const StyleConstants = createGlobalStyle`

  :root {
    --main-ui-color: #F8F7F7;
    --variant-ui-color: #F0EFEF;
    --contrast-ui-color: #333;

    --diffuse-shadow: 4px 4px 8px 2px #D4CECE;
    --diffuse-inset-shadow: inset 4px 4px 8px 4px #D4CECE;
    --sharp-shadow: 2px 2px 4px #B5AAAA;
    --sharp-contrast-shadow: 2px 2px 4px #333;
  }

`



ReactDOM.render(
  <React.StrictMode>
    <StyleConstants />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
