import React from 'react';

const SnowWrongAnswer = (props) => {

    const { store } = props;
    let backward = store.getState().buttonWrongBackward;
    let forward = store.getState().buttonWrongForward;
    let count = store.getState().counterWrongAnswer;
    let arrayWrongAswers = store.getState().questions.filter(t => {
            return !t.correct;

    }); 


    const showWrongAnswerForward = () => {

        if (arrayWrongAswers.length === 1) {
            store.dispatch({
                type: "SHOW_WRONG_ANSWER",
                buttonWrongBackward: true,
                buttonWrongForward: false,
                counterWrongAnswer: count
            });
        }
        
        if ((arrayWrongAswers.length !== 1) && (count < arrayWrongAswers.length)) {
            store.dispatch({
                type: "SHOW_WRONG_ANSWER",
                buttonWrongBackward: false,
                buttonWrongForward: false,
                counterWrongAnswer: ++count
            });
        } 
        if (count === arrayWrongAswers.length - 1) {
            store.dispatch({
                type: "SHOW_WRONG_ANSWER",
                buttonWrongBackward: false,
                buttonWrongForward: true,
                counterWrongAnswer: count
            });
        }
    }

    const showWrongAnswerBackward = () => {

        if (count > 0) {
            store.dispatch({
                type: "SHOW_WRONG_ANSWER",
                buttonWrongBackward: false,
                buttonWrongForward: false,
                counterWrongAnswer: --count
            });
        } 
        if (count === 0) {
            store.dispatch({
                type: "SHOW_WRONG_ANSWER",
                buttonWrongBackward: true,
                buttonWrongForward: false,
                counterWrongAnswer: count
            });
        }

    }

    return (
        <div>
            <label className='label-answer'>WRONG ANSWER</label>
            <div>
                <button className='button-backward' onClick={showWrongAnswerBackward} disabled={backward}>&lt;</button>
                <p className='show-answer' dangerouslySetInnerHTML={{ __html: arrayWrongAswers.length === 0 ? 'No wrong answer': arrayWrongAswers[count].name}} />
                <button className='button-forward' onClick={showWrongAnswerForward} disabled={forward}>&gt;</button>
            </div>
            <button className='button-exit'>EXIT</button>
        </div>
    );
}

export default SnowWrongAnswer;