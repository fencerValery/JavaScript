import ActionForQuestion from '../action';

const answer = (state = {}, action) => {
    return { ...state, choiceUser: false };
}

const _Answers = (state = [], action) => {
    state = state.map(t => {
        if (t.choiceUser) {
            return answer(t, action);
        } else {
            return t;
        }
    });
    return state;
}

const removeQuestion = (state = {}, action) => {
    switch (action.type) {
        case ActionForQuestion.GO_TO_NEXT_QUESTION:
            let user = '';
            state.answers.forEach(t => {
                if (t.choiceUser) {
                    user += t.variantAnswer;
                }
            });
            if (user === state.correctAnswer) {
                var newCorrect = true;
            } else  {
                newCorrect = false;
            }
            var newAnswers = _Answers(state.answers, action);
            return { ...state, correct: newCorrect, userAnswer: user, answers: newAnswers};
        default:
            return state;
    }
}

export default removeQuestion;