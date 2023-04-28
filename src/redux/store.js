import { configureStore } from '@reduxjs/toolkit';
import { instrumentReducer } from './slices/instrument';

const store = configureStore({
    reducer: {
        instrument: instrumentReducer
    }
});

export default store;