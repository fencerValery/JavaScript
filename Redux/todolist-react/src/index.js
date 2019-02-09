import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './todolist/ToDoList.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ToDoList from './todolist/components/ToDoList';
import { createStore, combineReducers } from 'redux';
import tasks from './todolist/reducer';




const takeTasksFromServer = () => {
    // requesting tasks from the server
    fetch("https://repetitora.net/api/JS/Tasks?widgetId=1967&count=30", {
        method: "GET",
        headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'accept': 'application/json'
        },
        node: 'cors'
    })
        .then(result => result.json())
        .then(data => {
            // variable for the initialization state
            let initialState = {
                tasks: [...data]
            };
            const store = createStore(combineReducers({ tasks }), initialState);
            //ReactDOM.render(<App />, document.getElementById('root'));
            const render = () => ReactDOM.render(<ToDoList store={store} />, document.getElementById('root1'));
            registerServiceWorker();


            store.subscribe(render);
            render();

        });
}

takeTasksFromServer();



