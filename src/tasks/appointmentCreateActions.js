import axios from 'axios';

export const CREATE_APPOINTMENT_SUCCESS = 'CREATE_APPOINTMENT_SUCCESS';
export const CREATE_APPOINTMENT_FAIL = 'CREATE_APPOINTMENT_FAIL';


export const createAppointment = (appointmentData) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:5000/api/appointments', appointmentData);
        dispatch({
        type: CREATE_APPOINTMENT_SUCCESS,
        payload: res.data.appointment
        });
    } catch (err) {
        dispatch({
        type: CREATE_APPOINTMENT_FAIL,
        payload: err.response.data.message
        });
    }
};
