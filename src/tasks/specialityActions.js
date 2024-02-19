import axios from 'axios';
import { fetchSpecialitiesStart, fetchSpecialitiesSuccess, fetchSpecialitiesFailure } from '../controllers/specialitySlice';

export const fetchSpecialities = () => async (dispatch) => {
    dispatch(fetchSpecialitiesStart());
    try {
    const response = await axios.get('http://localhost:5000/api/specialities');
    dispatch(fetchSpecialitiesSuccess(response.data.specialities));
    } catch (error) {
    dispatch(fetchSpecialitiesFailure(error.response.data.message));
    }
};
