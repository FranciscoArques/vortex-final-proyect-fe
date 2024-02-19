import { createSlice } from '@reduxjs/toolkit';

export const doctorSlice = createSlice({
    name: 'doctors',
    initialState: {
        loading: false,
        error: null,
        data: null,
    },
    reducers: {
        fetchDoctorsStart: state => {
        state.loading = true;
        state.error = null;
        state.data = null;
        },
        fetchDoctorsSuccess: (state, action) => {
        state.loading = false;
        state.data = action.payload;
        },
        fetchDoctorsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        },
    },
});

export const { fetchDoctorsStart, fetchDoctorsSuccess, fetchDoctorsFailure } = doctorSlice.actions;

export const selectDoctors = state => state.doctors;

export default doctorSlice.reducer;
