import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ToDoList from './toDoList/ToDoList';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ToDoList />, document.getElementById('root1'));
registerServiceWorker();
