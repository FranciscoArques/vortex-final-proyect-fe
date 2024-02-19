import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: null,
    data: null,
};

export const doctorCreateSlice = createSlice({
    name: 'doctorsCreate',
    initialState,
    reducers: {
        createDoctorStart: state => {
            state.loading = true;
            state.error = null;
        },
        createDoctorSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        createDoctorFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { createDoctorStart, createDoctorSuccess, createDoctorFailure } = doctorCreateSlice.actions;

export const selectDoctors = state => state.doctors;

export default doctorCreateSlice.reducer;
