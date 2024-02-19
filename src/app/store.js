import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from '../controllers/authSlice';
import registrationReducer from '../controllers/registrationSlice';

import doctorReducer from '../controllers/doctorSlice';
import doctorCreateReducer from '../controllers/doctorCreateSlice';
import doctorUpdateReducer from '../controllers/doctorUpdateSlice';

import specialitiesReducer from '../controllers/specialitySlice';

import appointmentDoctorReducer from '../controllers/appointmentDoctorSlice';
import appointmentCreateReducer from '../controllers/appointmentCreateSlice';
import appointmentsReducer from '../controllers/showAppointmentSlice';
import updateAppointmentReducer from '../controllers/updateAppointmentsSlice';
import disarrangeAppointmentReducer from '../controllers/disarrangeAppointment';
import deleteAppointment from '../controllers/deleteAppointmentSlice';
import  appointmentUserSlice  from '../controllers/appointmentUserSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    registration: registrationReducer,
    doctors: doctorReducer,
    doctorsCreate: doctorCreateReducer,
    doctorUpdate: doctorUpdateReducer,
    specialities: specialitiesReducer,
    appointmentDoctor: appointmentDoctorReducer,
    appointmentCreate: appointmentCreateReducer,
    appointments: appointmentsReducer,
    updateAppointment: updateAppointmentReducer,
    disarrangeAppointment: disarrangeAppointmentReducer,
    deleteAppointment: deleteAppointment,
    userAppointments: appointmentUserSlice
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
});

const persistor = persistStore(store);

export const clearPersistedState = () => ({
    type: 'CLEAR_PERSISTED_STATE',
});

export { store, persistor };
