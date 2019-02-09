import React  from 'react';

const ToDoListFooter = (props) => {
    return (
        <div className='toDoListFooter'>
            <span>{props.quantityTasks}</span>
            <button onClick={props.showAllTask} value='All'>All tasks</button>
            <button onClick={props.showActiveTask} value='Active'>Active tasks</button>
            <button onClick={props.showCompliteTask} value='Complite'>Complite tasks</button>
            <button onClick={props.deleteCompliteTask} value='Clear'>Clear complite</button>
        </div>

    );
}

export default ToDoListFooter;

