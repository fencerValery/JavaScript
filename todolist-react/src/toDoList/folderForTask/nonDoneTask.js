import React from 'react';

const NonDoneTask = (props) => {
    return (
        <div className="div-for-task">
            <input className="see-task" type="checkbox" onChange={props.changeCheckbox}>
            </input>
            <h4 className="theme-task">{props.name}
            </h4>
            <input type="button" className="span-close" value="x" onClick={props.onclick}>
            </input>
        </div>
    );
}

export default NonDoneTask