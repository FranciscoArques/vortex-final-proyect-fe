import { UPDATE_DOCTOR_SUCCESS, UPDATE_DOCTOR_FAILURE } from '../tasks/doctorUpdateActions';

const initialState = {
    loading: false,
    error: null,
    doctor: null
};

const doctorUpdateReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DOCTOR_SUCCESS:
            return {
                ...state,
                loading: false,
                doctor: action.payload,
                error: null
            };
        case UPDATE_DOCTOR_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default doctorUpdateReducer;