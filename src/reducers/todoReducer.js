import { CREATE_TODO, REMOVE_TODO } from '../actions/index'

const initialState = [];

export const todo = (state = initialState, action) => {

    const { type, payload } = action;
    switch (type) {
        case CREATE_TODO:
            {
                const { text } = payload;
                const newTodo = {
                    text,
                    isCompleted: false
                }
                return [...state, newTodo]
            }
        case REMOVE_TODO:
            {
                const { text } = payload;
                return state.filter(todo => todo.text !== text)
            }
        default:
            return state
    }

}

