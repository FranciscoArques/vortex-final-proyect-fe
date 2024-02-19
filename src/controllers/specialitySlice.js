import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    specialities: [],
    loading: false,
    error: null,
    };

    const specialitiesSlice = createSlice({
    name: 'specialities',
    initialState,
    reducers: {
        fetchSpecialitiesStart(state) {
        state.loading = true;
        state.error = null;
        },
        fetchSpecialitiesSuccess(state, action) {
        state.loading = false;
        state.specialities = action.payload;
        },
        fetchSpecialitiesFailure(state, action) {
        state.loading = false;
        state.error = action.payload;
        },
    },
});

export const { fetchSpecialitiesStart, fetchSpecialitiesSuccess, fetchSpecialitiesFailure } = specialitiesSlice.actions;

export default specialitiesSlice.reducer;