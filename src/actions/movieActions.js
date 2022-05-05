import types from "./index"

export const loadMovies = data => ({
    type: types.LOAD_MOVIES,
    data: data 
})

export const addMoreMovies = data => ({
    type: types.ADD_MORE_MOVIES,
    data: data 
})