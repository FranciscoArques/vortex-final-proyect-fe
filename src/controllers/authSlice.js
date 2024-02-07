import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    userId: null,
    token: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
        state.isAuthenticated = true;
        state.userId = action.payload.userId;
        state.token = action.payload.token;
        },
        logoff(state) {
        state.isAuthenticated = false;
        state.userId = null;
        state.token = null;
        }
    }
});

export const { login, logoff } = authSlice.actions;

export default authSlice.reducer;
