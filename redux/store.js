import { configureStore } from '@reduxjs/toolkit'
import { userReeducer } from './reducer/useReducer'




export const store = configureStore({
    reducer: {
        user: userReeducer,
        // otherState: otherReducer
    }

})


export const server = 'https://crystal-concept-backend.onrender.com/api/v1'