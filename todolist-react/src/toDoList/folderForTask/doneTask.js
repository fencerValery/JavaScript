import React from 'react';

const DoneTask = (props) => {

    return (
        <div className="div-for-task">
            <input className="see-task" type="checkbox" onChange={props.changeCheckbox} checked>
            </input>
            <s>
                <h4 className="theme-task">{props.name}
                </h4>
            </s>
            <input type="button" className="span-close" value="x" onClick={props.onclick}>
            </input>
        </div>
    );
}

export default DoneTask