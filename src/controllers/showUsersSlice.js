import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        loading: false,
        error: null,
        data: null,
    },
    reducers: {
        fetchUsersStart: state => {
        state.loading = true;
        state.error = null;
        state.data = null;
        },
        fetchUsersSuccess: (state, action) => {
        state.loading = false;
        state.data = action.payload;
        },
        fetchUsersFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        },
    },
});

export const { fetchUsersStart, fetchUsersSuccess, fetchUsersFailure } = usersSlice.actions;

export const selectUsers = state => state.users;

export default usersSlice.reducer;
