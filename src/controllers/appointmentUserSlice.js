import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    loading: false,
    error: null,
    appointments: [],
};

export const appointmentUserSlice = createSlice({
    name: 'userAppointments',
    initialState,
    reducers: {
        fetchUserAppointmentsStart: state => {
            state.loading = true;
            state.error = null;
        },
        fetchUserAppointmentsSuccess: (state, action) => {
            state.loading = false;
            state.appointments = action.payload;
            state.error = null;
        },
        fetchUserAppointmentsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.appointments = [];
        },
    },
});

export const { fetchUserAppointmentsStart, fetchUserAppointmentsSuccess, fetchUserAppointmentsFailure } = appointmentUserSlice.actions;

export const fetchUserAppointments = (userId) => async (dispatch) => {
    dispatch(fetchUserAppointmentsStart());
    try {
        const response = await axios.get(`http://localhost:5000/api/appointments/patient/${userId}`);
        dispatch(fetchUserAppointmentsSuccess(response.data.paginatedUserAppointments));
    } catch (error) {
        dispatch(fetchUserAppointmentsFailure(error.message));
    }
};

export default appointmentUserSlice.reducer;

