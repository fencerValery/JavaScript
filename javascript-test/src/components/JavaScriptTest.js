import React from 'react';
import '../JavaScriptTest.css';
import TestTitle from './TestTitle';
import TestDescription from './TestDescription';
import TestStart from './TestStart';
import TestQuestion from './TestQuestion';
import TestAnswer from './TestAnswer';
import TestNextQuestion from './TestNextQuestion';
import TestResult from './TestResult';
import SnowCorrectAnswer from './ShowCorrectAnswer';
import SnowWrongAnswer from './ShowWrongAnswer';

const JavaScriptTest = (props) => {
    const { store } = props;
    const count = store.getState().counter;
    const lengthQuestion = store.getState().questions.length;


    //console.log(store.getState());
    


    if (!store.getState().startTest && (count !== lengthQuestion)) {
        return (
            <div>
                <TestTitle />
                <TestDescription />
                <TestStart store={store} />
            </div>
        );
    }

    if (store.getState().startTest && (count !== lengthQuestion)) {
        return (
            <div>
                <TestQuestion store={store} />
                <TestAnswer store={store} />
                <TestNextQuestion store={store} />
            </div>
        );
    }

    if (count === lengthQuestion) {
        return (
        <div>
            <TestResult store={store} />
            <SnowCorrectAnswer store={store} />
            <SnowWrongAnswer store={store} />
        </div>);
    }
}



export default JavaScriptTest;