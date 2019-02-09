import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import JavaScriptTest from './components/JavaScriptTest';
import test from './repository/reducers/reducersTest';
import { createStore } from 'redux';


const store = createStore(test);
const render = () => ReactDOM.render(<JavaScriptTest store={store}/>, document.getElementById('root'));
registerServiceWorker();

store.subscribe(render);
render();








