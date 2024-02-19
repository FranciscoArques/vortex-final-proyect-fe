import { fetchAppointmentsStart, fetchAppointmentsSuccess, fetchAppointmentsFailure } from '../controllers/showAppointmentSlice';

export const fetchAppointments = () => async (dispatch) => {
    dispatch(fetchAppointmentsStart());
    try {
        const response = await fetch('http://localhost:5000/api/appointments');
        const data = await response.json();
        dispatch(fetchAppointmentsSuccess(data.appointments));
    } catch (error) {
        dispatch(fetchAppointmentsFailure(error.message));
    }
};