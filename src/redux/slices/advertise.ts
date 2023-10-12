import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    advertise: {
        items: [],
        status: 'loading',
    },
    price: {
        items: [],
        status: 'loading',
    },
};

const adverticeSlice = createSlice({
    name: 'advertise',
    initialState,
    reducers: {},
});

export const advertisementsReducer = adverticeSlice.reducer;
