import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const memoElement = document.getElementById('memo');
ReactDOM.render(<App />, memoElement);

if (module.hot) {
  module.hot.accept();
}
