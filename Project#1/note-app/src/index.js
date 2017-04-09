import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const memoElement = document.getElementById('root');
ReactDOM.render(<App />, memoElement);

if (module.hot) {
  module.hot.accept();
}
