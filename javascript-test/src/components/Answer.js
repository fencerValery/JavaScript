import React from 'react';



const Answer = (props) => {
    const { answer, changeCheckbox, choice } = props;

    return (
        <div>
            <input type='checkbox' className='javascript-test-answer-checkbox' 
                onChange={changeCheckbox} checked={choice}></input>
            <p className='javascript-test-answer'>{answer}</p>
        </div>
    );
}

export default Answer;