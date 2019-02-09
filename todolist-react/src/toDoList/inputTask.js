import React from 'react';


const InputTask = (props) => {
    
    return (
        <div>
            <input className='input-for-task' placeholder='write new task' type='text' onKeyPress={props.takeNameTask}></input>
        </div>
    );
}

export default InputTask;