import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        configure(state, action){
            state = action.paylod
        },
        add(state, action) {
            state.unshift(action.paylod)
        },
    }
})

export default questionsSlice.reducer
