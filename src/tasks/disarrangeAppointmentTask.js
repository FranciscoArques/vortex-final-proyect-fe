import axios from 'axios';

export const DISARRANGE_APPOINTMENT_REQUEST = 'DISARRANGE_APPOINTMENT_REQUEST';
export const DISARRANGE_APPOINTMENT_SUCCESS = 'DISARRANGE_APPOINTMENT_SUCCESS';
export const DISARRANGE_APPOINTMENT_FAILURE = 'DISARRANGE_APPOINTMENT_FAILURE';

export const disarrangeAppointmentRequest = () => ({
    type: DISARRANGE_APPOINTMENT_REQUEST
});

export const disarrangeAppointmentSuccess = () => ({
    type: DISARRANGE_APPOINTMENT_SUCCESS
});

export const disarrangeAppointmentFailure = error => ({
    type: DISARRANGE_APPOINTMENT_FAILURE,
    error
});

export const disarrangeAppointment = appointmentId => {
    return async dispatch => {
        dispatch(disarrangeAppointmentRequest());
        try {
        await axios.patch(`http://localhost:5000/api/appointments/setAvailable/${appointmentId}`);
        dispatch(disarrangeAppointmentSuccess());
        } catch (error) {
        dispatch(disarrangeAppointmentFailure(error));
        }
    };
};
