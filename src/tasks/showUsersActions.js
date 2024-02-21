import axios from 'axios';
import { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } from '../controllers/showUsersSlice';

export const fetchUsers = () => async dispatch => {
    dispatch(fetchUsersStart());
    try {
        const response = await axios.get('http://localhost:5000/api/users');
        const data = response.data;
        dispatch(fetchUsersSuccess(data.users));
    } catch (error) {
        dispatch(fetchUsersFailure(error.message));
    }
};
