import axios from 'axios';

export const UPDATE_DOCTOR_SUCCESS = 'UPDATE_DOCTOR_SUCCESS';
export const UPDATE_DOCTOR_FAILURE = 'UPDATE_DOCTOR_FAILURE';

export const updateDoctor = (doctorData) => {
    return async (dispatch) => {
        try {
            const response = await axios.patch(`http://localhost:5000/api/doctors/${doctorData._id}`, doctorData.doctor);
            dispatch({
                type: UPDATE_DOCTOR_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: UPDATE_DOCTOR_FAILURE,
                payload: error.message
            });
        }
    };
};