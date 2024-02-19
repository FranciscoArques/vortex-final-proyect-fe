import axios from 'axios';
import { createDoctorStart, createDoctorSuccess, createDoctorFailure } from '../controllers/doctorCreateSlice';

export const createDoctor = (doctorData) => async (dispatch) => {
    dispatch(createDoctorStart());
    try {
        const response = await axios.post('http://localhost:5000/api/doctors', doctorData);
        dispatch(createDoctorSuccess(response.data.doctor));
    } catch (error) {
        dispatch(createDoctorFailure(error.response.data.message));
    }
};
