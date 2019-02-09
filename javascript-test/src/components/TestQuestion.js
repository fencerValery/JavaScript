import React from 'react';

const TestQuestion = (props) => {
    const { store } = props;
    var object = store.getState();
    var counter = object.counter;
    var name = object.questions[counter].name;
    return (
        <div>
            <p className='javascript-test-question'  dangerouslySetInnerHTML={{ __html: name}} />
            
        </div>
    );
}

export default TestQuestion;