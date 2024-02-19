import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: true,
    error: null,
    appointments: null,
    doctorId: null
};

export const appointmentDoctorSlice = createSlice({
    name: 'appointmentDoctor',
    initialState,
    reducers: {
        appointmentDoctorStart: state => {
            state.loading = true;
            state.error = null;
        },
        appointmentDoctorSuccess: (state, action) => {
            state.loading = false;
            state.appointments = action.payload;
            state.doctorId = action.payload.length > 0 ? action.payload[0].doctor.id : null;
            state.error = null;
        },
        appointmentDoctorFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.appointments = null;
            state.doctorId = null;
        },
    },
});

export const { appointmentDoctorStart, appointmentDoctorSuccess, appointmentDoctorFailure } = appointmentDoctorSlice.actions;

export const selectAppointments = state => state.appointmentDoctor;

export default appointmentDoctorSlice.reducer;