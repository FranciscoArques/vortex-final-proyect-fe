import { fetchDoctorsStart, fetchDoctorsSuccess, fetchDoctorsFailure } from '../controllers/doctorSlice';

export const fetchDoctors = () => async dispatch => {
  dispatch(fetchDoctorsStart());
  try {
    const response = await fetch('http://localhost:5000/api/doctors');
    const data = await response.json();
    dispatch(fetchDoctorsSuccess(data.doctors));
  } catch (error) {
    dispatch(fetchDoctorsFailure(error.message));
  }
};