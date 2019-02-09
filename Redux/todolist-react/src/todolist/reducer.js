import actionForTask from './actions';



const tasks = (state = [], action) => {
    switch (action.type) {
        case actionForTask.UPDATE_TASKS:
            state = action.store;
            return state;

        case actionForTask.CHANGE_NON_DONE:
            state = state.map(t => {
                if (t.id === action.id) {
                    t.done = action.done;
                    return t;
                } else {
                    return t;
                }
            })
            return state;

        case actionForTask.CHANGE_DONE:
            state = state.map(t => {
                if (t.id === action.id) {
                    t.done = action.done;
                    return t;
                } else {
                    return t;
                }
            })
            return state;

        default:
            return state;
    }
}

export default tasks

