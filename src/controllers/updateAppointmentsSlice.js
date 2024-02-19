import { combineReducers } from 'redux';

const initialState = {
    appointment: null,
    error: null,
};

const updateAppointmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_APPOINTMENT_SUCCESS':
        return {
            ...state,
            appointment: action.payload,
            error: null,
        };
        case 'UPDATE_APPOINTMENT_FAILURE':
        return {
            ...state,
            error: action.payload,
        };
        default:
        return state;
    }
};

export default combineReducers({
    updateAppointment: updateAppointmentReducer,
});
