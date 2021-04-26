import { configureStore } from '@reduxjs/toolkit'

import questionssReducer from './questions'

export default configureStore({
    reducer: {
        questions: questionssReducer
    }
})
