import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../controllers/authSlice';
import registrationReducer from '../controllers/registrationSlice';

export default configureStore({
    reducer: {
        auth: authReducer,
        registration: registrationReducer
    }
});
