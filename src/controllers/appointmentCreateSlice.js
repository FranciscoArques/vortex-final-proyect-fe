import { CREATE_APPOINTMENT_SUCCESS, CREATE_APPOINTMENT_FAIL } from '../tasks/appointmentCreateActions';

const initialState = {
    appointment: null,
    error: null
};

const appointmentsCreateReducer = function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_APPOINTMENT_SUCCESS:
        return {
            ...state,
            appointment: payload,
            error: null
        };
        case CREATE_APPOINTMENT_FAIL:
        return {
            ...state,
            error: payload
        };
        default:
        return state;
    }
}

export default appointmentsCreateReducer;