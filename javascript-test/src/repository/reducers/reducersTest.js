import Test from '../constants';
import ActionForQuestion from '../action';
import questions from './reducerForAnswer';
import removeQuestion from './reducerForQuestion'


const test = (state = Test, action) => {

    switch (action.type) {
        case ActionForQuestion.START_TEST:
            return { ...state, startTest: action.startTest };
        case ActionForQuestion.SELECT_ANSWER:
            return { ...state, questions: questions(state, action) };
        case ActionForQuestion.DELETE_SELECT_ANSWER:
            return { ...state, questions: questions(state, action) };
        case ActionForQuestion.GO_TO_NEXT_QUESTION:
            let newQuestions = state.questions.map((t, i) => {
                if (i === state.counter) {
                    return removeQuestion(t, action);
                } else {
                    return t;
                }
            });
            return { ...state, questions: newQuestions, counter: state.counter + 1 };
        case ActionForQuestion.SHOW_CORRECT_ANSWER:
            return {
                ...state, buttonCorrectBackward: action.buttonCorrectBackward,
                counterCorrectAnswer: action.counterCorrectAnswer, buttonCorrectForward: action.buttonCorrectForward
            };
        case ActionForQuestion.SHOW_WRONG_ANSWER:
            return {
                ...state, buttonWrongBackward: action.buttonWrongBackward,
                counterWrongAnswer: action.counterWrongAnswer, buttonWrongForward: action.buttonWrongForward
            };
        default:
            return state;
    }
}


export default test;