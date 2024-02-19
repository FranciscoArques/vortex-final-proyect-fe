import {
        DELETE_APPOINTMENT_REQUEST,
        DELETE_APPOINTMENT_SUCCESS,
        DELETE_APPOINTMENT_FAILURE
    } from '../tasks/deleteAppointmentActions';
    
    const initialState = {
        loading: false,
        error: null
    };
    
    const deleteAppointment = (state = initialState, action) => {
        switch (action.type) {
        case DELETE_APPOINTMENT_REQUEST:
            return {
            ...state,
            loading: true,
            error: null
            };
        case DELETE_APPOINTMENT_SUCCESS:
            return {
            ...state,
            loading: false
            };
        case DELETE_APPOINTMENT_FAILURE:
            return {
            ...state,
            loading: false,
            error: action.error
            };
        default:
            return state;
        }
    };

export default deleteAppointment;