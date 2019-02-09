import React from 'react';
import ReactDOM from 'react-dom';
import JavaScriptTest from './components/JavaScriptTest';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JavaScriptTest />, div);
  ReactDOM.unmountComponentAtNode(div);
});
