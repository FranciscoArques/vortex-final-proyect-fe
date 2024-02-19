import { createSlice } from '@reduxjs/toolkit';

export const appointmentSlice = createSlice({
    name: 'appointments',
    initialState: {
        loading: false,
        error: null,
        data: null,
    },
    reducers: {
        fetchAppointmentsStart: state => {
        state.loading = true;
        state.error = null;
        state.data = null;
        },
        fetchAppointmentsSuccess: (state, action) => {
        state.loading = false;
        state.data = action.payload;
        },
        fetchAppointmentsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        },
    },
});

export const { fetchAppointmentsStart, fetchAppointmentsSuccess, fetchAppointmentsFailure } = appointmentSlice.actions;

export const selectShowAppointments = state => state.appointments;

export default appointmentSlice.reducer;
