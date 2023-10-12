import { configureStore } from '@reduxjs/toolkit';
import { advertisementsReducer } from './slices/advertise';

const store = configureStore({
    reducer: {
        advertise: advertisementsReducer,
    },
});

export default store;
