import { ARRANGE_APPOINTMENT_SUCCESS, ARRANGE_APPOINTMENT_FAILURE } from '../tasks/arrangeAppointmentAction';

const initialState = {
    appointment: null,
    error: null,
};

const arrangeAppointmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ARRANGE_APPOINTMENT_SUCCESS:
        return {
            ...state,
            appointment: action.payload.appointment,
            error: null,
        };
        case ARRANGE_APPOINTMENT_FAILURE:
        return {
            ...state,
            appointment: null,
            error: action.payload,
        };
        default:
        return state;
    }
};

export default arrangeAppointmentReducer;
