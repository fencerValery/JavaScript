import React from 'react';
import Task from './taskRender';
import ToDoListFooter from './ToDoLisstFooter';


const ToDoList = (props) => {
    const { store } = props;
    let tasksToRender = store.getState().tasks;
   /* let activeTasks = [];
    let compileTasks = [];
    


    if (tasksToRender !== null) {
        activeTasks = tasksToRender.filter(t => t.done === false);
        compileTasks = tasksToRender.filter(t => t.done === true);
    }*/

    const createNewTaskInput = (e) => {
        if (e.key === 'Enter') {
            var valueInput = e.currentTarget.value;
            //put task on the server
            const data = new URLSearchParams();
            data.append('widgetId', 1967);
            data.append('title', valueInput);
            // clear input
            e.currentTarget.value = '';
            fetch("https://repetitora.net/api/JS/Tasks", {
                method: "POST",
                body: data,
                headers: {
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'accept': 'application/json'
                },
                node: 'cors'
            })
                .then(result => result.json())
                .then(data => {
                    let newTask = {};
                    newTask.title = data.task.title;
                    newTask.id = data.task.id;
                    newTask.done = data.task.done;
                    tasksToRender.unshift(newTask);
                    store.dispatch({
                        type: 'UPDATE_TASKS',
                        store: tasksToRender
                    });
                });
        }
    };


    return (
        <div>
            <div>
                {/* <p className='title-name'>TODOLIST REDUX</p> */}
                <ToDoListFooter store={store} />
            </div>
            <div>
                <input className='input-for-task' placeholder='write new task and press enter' type='text' onKeyPress={createNewTaskInput}></input>
            </div>
            {
                tasksToRender.map((t, i) =>
                    <Task task={t} key={i} store={store} />
                )
            }

        </div>
    )
}


export default ToDoList