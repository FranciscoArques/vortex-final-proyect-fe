import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    userId: null,
    userName: null,
    userRole: null,
    token: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            const { userId, name, role, token } = action.payload;
            return {
                ...state,
                isAuthenticated: true,
                userId,
                userName: name,
                userRole: role,
                token
            };
        },
        logoff(state) {
            return {
                ...state,
                isAuthenticated: false,
                userId: null,
                userName: null,
                userRole: null,
                token: null
            };
        }
    }
});

export const { login, logoff } = authSlice.actions;

export default authSlice.reducer;