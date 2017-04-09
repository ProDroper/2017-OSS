import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const memoElement = document.getElementById('root');
ReactDOM.render(<App />, memoElement);

if (module.hot) {
  module.hot.accept();
}
