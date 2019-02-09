import React from 'react';

const TestNextQuestion = (props) => {
    const { store} = props;

    const clickNextQuestion = () => {
        store.dispatch({
            type: 'GO_TO_NEXT_QUESTION'
        });
    }
    return (
        <div>
            <button className='test-next-question' onClick={clickNextQuestion}>NEXT QUESTION</button>
        </div>
    );
}

export default TestNextQuestion;