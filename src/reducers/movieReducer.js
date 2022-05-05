import types from "../actions"

const movieReducer = (state, action) => {
    if (!state) {
        state = {
            movies: []
        }
    }
    switch (action.type) {
        case types.LOAD_MOVIES:
            return {
                ...state,
                movies: action.data 
            }
        case types.ADD_MORE_MOVIES:
            return {
                ...state,
                movies: state.movies.concat(action.data)
            }
        default:
            return state;
    }
}

export default movieReducer;