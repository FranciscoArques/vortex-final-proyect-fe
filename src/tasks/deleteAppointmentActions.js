import axios from 'axios';

export const DELETE_APPOINTMENT_REQUEST = 'DELETE_APPOINTMENT_REQUEST';
export const DELETE_APPOINTMENT_SUCCESS = 'DELETE_APPOINTMENT_SUCCESS';
export const DELETE_APPOINTMENT_FAILURE = 'DELETE_APPOINTMENT_FAILURE';

export const deleteAppointmentRequest = () => ({
    type: DELETE_APPOINTMENT_REQUEST
});

export const deleteAppointmentSuccess = () => ({
    type: DELETE_APPOINTMENT_SUCCESS
});

export const deleteAppointmentFailure = error => ({
    type: DELETE_APPOINTMENT_FAILURE,
    error
});

export const deleteAppointment = appointmentId => {
    return async dispatch => {
        dispatch(deleteAppointmentRequest());
        try {
        await axios.delete(`http://localhost:5000/api/appointments/${appointmentId}`);
        dispatch(deleteAppointmentSuccess());
        } catch (error) {
        dispatch(deleteAppointmentFailure(error));
        }
    };
};
