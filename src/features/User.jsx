import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { data } from '../api/data';

export const getData = createAsyncThunk('user/getData', async (arg) => {
    return fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json());
});

export const userSlice = createSlice({
    name: 'user',
    initialState: { value: [], status: '' },
    reducers: {
        addValue: (state, action) => {
            state.value.push(action.payload);
        },
        deleteValue: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id);
        },
        updateValue: (state, action) => {}
    },
    extraReducers: {
        [getData.pending]: (state) => {
            state.status = 'Loading';
        },
        [getData.fulfilled]: (state, { payload }) => {
            state.status = 'Done';
            state.value = payload;
        },
        [getData.rejected]: (state) => {
            state.status = 'Rejected';
        }
    }
});

export const { addValue, deleteValue, updateValue } = userSlice.actions;
export default userSlice.reducer;
