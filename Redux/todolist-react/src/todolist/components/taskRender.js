import React from 'react';

const Task = (props) => {
    const { task, store } = props;

    const deleteTask = () => {
        var text = task.text;
        var done = task.isDone;

        if (!done) {
            alert('No compile task. Please compile task!')
        } else {

            store.dispatch({
                type: 'DELETE_TASK',
                text: text
            });
        }
    }

    const changeTask = () => {
        let idChange = task.id;
        let done = task.done;


        if (done) {
            store.dispatch({
                type: 'CHANGE_NON_DONE',
                id: idChange,
                done: false
            })
        } else {
            store.dispatch({
                type: 'CHANGE_NON_DONE',
                id: idChange,
                done: true
            })
        }

    }

    if (task.done) {
        return (
            <div className="div-for-task">
                <input className="see-task" type="checkbox" checked={true} onChange={changeTask}></input>
                <s><h4 className="theme-task">{task.title}</h4></s>
                <input type="button" className="span-close" value="x" onClick={deleteTask}></input>
            </div>
        )
    } else {
        return (
            <div className="div-for-task">
                <input className="see-task" type="checkbox" checked={false} onChange={changeTask}></input>
                <h4 className="theme-task">{task.title}</h4>
                <input type="button" className="span-close" value="x" onClick={deleteTask}></input>
            </div>
        )
    }

}

export default Task;