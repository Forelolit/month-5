import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

//Хранилище Rtk

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});
