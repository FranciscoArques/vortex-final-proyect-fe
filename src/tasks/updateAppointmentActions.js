import axios from 'axios';

export const UPDATE_APPOINTMENT_SUCCESS = 'UPDATE_APPOINTMENT_SUCCESS';
export const UPDATE_APPOINTMENT_FAILURE = 'UPDATE_APPOINTMENT_FAILURE';

export const updateAppointment = (id, data) => async (dispatch) => {
    try {
        const cleanData = {
            date: data.date,
            status: data.status,
            doctorId: data.doctor.id
        }
        const response = await axios.patch(`http://localhost:5000/api/appointments/${id}`, cleanData);
        dispatch({ type: 'UPDATE_APPOINTMENT_SUCCESS', payload: response.data.appointment });
    } catch (error) {
        dispatch({ type: 'UPDATE_APPOINTMENT_FAILURE', payload: error.message });
    }
};
