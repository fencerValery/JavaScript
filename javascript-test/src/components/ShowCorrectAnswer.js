import React from 'react';

const SnowCorrectAnswer = (props) => {

    const { store } = props;
    let backward = store.getState().buttonCorrectBackward;
    let forward = store.getState().buttonCorrectForward;
    let count = store.getState().counterCorrectAnswer;
    let arrayCorrectAswers = store.getState().questions.filter(t => {
        return t.correct;

    });

    const showCorrectAnswerForward = () => {

        if (arrayCorrectAswers.length === 1) {
            store.dispatch({
                type: "SHOW_CORRECT_ANSWER",
                buttonCorrectBackward: true,
                buttonCorrectForward: false,
                counterCorrectAnswer: count
            });
        }


        if ((arrayCorrectAswers.length !== 1) && (count < arrayCorrectAswers.length)) {
            store.dispatch({
                type: "SHOW_CORRECT_ANSWER",
                buttonCorrectBackward: false,
                buttonCorrectForward: false,
                counterCorrectAnswer: ++count
            });
        }
        if (count === arrayCorrectAswers.length - 1) {
            store.dispatch({
                type: "SHOW_CORRECT_ANSWER",
                buttonCorrectBackward: false,
                buttonCorrectForward: true,
                counterCorrectAnswer: count
            });
        }
    }

    const showCorrectAnswerBackward = () => {

        if (count > 0) {
            store.dispatch({
                type: "SHOW_CORRECT_ANSWER",
                buttonCorrectBackward: false,
                buttonCorrectForward: false,
                counterCorrectAnswer: --count
            });
        }
        if (count === 0) {
            store.dispatch({
                type: "SHOW_CORRECT_ANSWER",
                buttonCorrectBackward: true,
                buttonCorrectForward: false,
                counterCorrectAnswer: count
            });
        }

    }


    return (
        <div>
            <label className='label-answer'>CORRECT ANSWER</label>
            <div>
                <button className='button-backward' onClick={showCorrectAnswerBackward} disabled={backward}>&lt;</button>
                <p className='show-answer' dangerouslySetInnerHTML={{ __html: arrayCorrectAswers.length === 0 ? 'No correct answer': arrayCorrectAswers[count].name}} />
                <button className='button-forward' onClick={showCorrectAnswerForward} disabled={forward}>&gt;</button>
            </div>
        </div>
    );
}

export default SnowCorrectAnswer;