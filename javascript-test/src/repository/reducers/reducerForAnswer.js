import ActionForQuestion from '../action';


const answer = (state = {}, action) => {
    switch (action.type) {
        case ActionForQuestion.SELECT_ANSWER:
            return { ...state, choiceUser: true };
        case ActionForQuestion.DELETE_SELECT_ANSWER:
            return { ...state, choiceUser: false };
        default:
            return state;
    }
}

const _Answers = (state = [], action) => {

    switch (action.type) {
        case ActionForQuestion.SELECT_ANSWER:
            state = state.map(t => {
                if (t.variantAnswer === action.variantAnswer) {
                    return answer(t, action);
                } else {
                    return t;
                }
            });
            return state;

        case ActionForQuestion.DELETE_SELECT_ANSWER:
            state = state.map(t => {
                if (t.variantAnswer === action.variantAnswer) {
                    return answer(t, action);
                } else {
                    return t;
                }
            });
            return state;
        default:
            return state;
    }
}

const question = (state = {}, action) => {

    switch (action.type) {
        case ActionForQuestion.SELECT_ANSWER:
            return { ...state, answers: _Answers(state.answers, action) };
        case ActionForQuestion.DELETE_SELECT_ANSWER:
            return { ...state, answers: _Answers(state.answers, action) };
        default:
            return state;
    }
}

const questions = (state = {}, action) => {

    switch (action.type) {
        case ActionForQuestion.SELECT_ANSWER:
            var newQuestions = state.questions.map((t, i) => {
                if (i === state.counter) {
                    return question(t, action);
                } else {
                    return t;
                }
            });
            return newQuestions;
        case ActionForQuestion.DELETE_SELECT_ANSWER:
            newQuestions = state.questions.map((t, i) => {
                if (i === state.counter) {
                    return question(t, action);
                } else {
                    return t;
                }
            });
            return newQuestions;
        default:
            return state;
    }
}





export default questions;