import axios from 'axios';
import { appointmentDoctorStart, appointmentDoctorSuccess, appointmentDoctorFailure } from '../controllers/appointmentDoctorSlice';

export const appointmentDoctor = (doctorId) => async (dispatch) => {
    dispatch(appointmentDoctorStart());
    try {
        const response = await axios.get(`http://localhost:5000/api/appointments/doctor/${doctorId}`);
        dispatch(appointmentDoctorSuccess({ appointments: response.data.paginatedDoctorsAppointments, doctorId }));
    } catch (error) {
        dispatch(appointmentDoctorFailure(error.message));
    }
};