import React from 'react';
import Answer from './Answer';

const TestAnswer = (props) => {
    const { store } = props;
    const count = store.getState().counter;
    const object = store.getState().questions[count].answers;


    return (
        <div>
            {
                        object.map((t, i) =>
                            <div key={i}>
                                <Answer answer={t.variantAnswer} choice={t.choiceUser} changeCheckbox={() => {
                                     if (!t.choiceUser) {
                                        store.dispatch({
                                            type: 'SELECT_ANSWER',
                                            variantAnswer: t.variantAnswer
                                        });
                                    } else {
                                        store.dispatch({
                                            type: 'DELETE_SELECT_ANSWER',
                                            variantAnswer: t.variantAnswer
                                        });
                                    }
                                }}/>
                            </div>
                        )
                    }
        </div>
    );

}

export default TestAnswer;