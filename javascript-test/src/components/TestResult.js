import React from 'react';

const TestResult = (props) => {
    const { store } = props;

    const result = () => {
        var correct = 0;
        var wrong = 0;
        var arrayQuestions = store.getState().questions;
        arrayQuestions.forEach(t => {
            t.correct? ++correct:++wrong;
        });
        return 'correct answers - ' + correct + ': wrong answers - ' + wrong;
    }

    return (
        <div>
            <p className='test-result'>{result()}</p>
        </div>
    );
}

export default TestResult;