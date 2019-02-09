import React  from 'react';

const ToDoListFooter = (props) => {
    const {store } = props;
    

    const showAllTask = () => {
      
    }

    const showActiveTask = () => {
       
    }

    const showCompliteTask = () => {
       
    }

    const deleteCompliteTask = () => {

    }
    
    return (
        <div className='toDoListFooter'>
            <span>123456</span>
            <button onClick={showAllTask} >All tasks</button>
            <button onClick={showActiveTask} >Active tasks</button>
            <button onClick={showCompliteTask} >Complite tasks</button>
            <button onClick={deleteCompliteTask} >Delete complite tasks</button>

        </div>
    );
}

export default ToDoListFooter;