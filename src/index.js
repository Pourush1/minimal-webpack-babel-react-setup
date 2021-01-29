import React from 'react';
import ReactDOM from 'react-dom';
 
const title = 'React with Webpack and Babel. Pourush';
 
ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
