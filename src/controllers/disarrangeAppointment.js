import {
    DISARRANGE_APPOINTMENT_REQUEST,
    DISARRANGE_APPOINTMENT_SUCCESS,
    DISARRANGE_APPOINTMENT_FAILURE
    } from '../tasks/disarrangeAppointmentTask';
    
    const initialState = {
        loading: false,
        error: null
    };
    
    const disarrangeAppointment = (state = initialState, action) => {
        switch (action.type) {
        case DISARRANGE_APPOINTMENT_REQUEST:
            return {
            ...state,
            loading: true,
            error: null
            };
        case DISARRANGE_APPOINTMENT_SUCCESS:
            return {
            ...state,
            loading: false
            };
        case DISARRANGE_APPOINTMENT_FAILURE:
            return {
            ...state,
            loading: false,
            error: action.error
            };
        default:
            return state;
        }
    };
    
export default disarrangeAppointment;