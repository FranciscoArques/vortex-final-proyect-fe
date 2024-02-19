import axios from 'axios';

export const ARRANGE_APPOINTMENT_SUCCESS = 'ARRANGE_APPOINTMENT_SUCCESS';
export const ARRANGE_APPOINTMENT_FAILURE = 'ARRANGE_APPOINTMENT_FAILURE';

export const arrangeAppointment = (appointmentId) => async (dispatch) => {
    try {
        const response = await axios.patch(`http://localhost:5000/api/appointments/setTaken/${appointmentId}`);
        dispatch({ type: ARRANGE_APPOINTMENT_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: ARRANGE_APPOINTMENT_FAILURE, payload: error.response.data.message });
    }
};
