import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers } from '../api/api';

// Redux Toolkit использует createAsyncThunk
// чтобы обрабатывать асинхронные действия через экшены и редьюсеры
export const fetchUsersThunk = createAsyncThunk('users/fetch', async () => {
    return await fetchUsers();
});

// В Redux Toolkit вам нужно самостоятельно управлять состоянием загрузки, ошибки и данных через слайс
const usersSlice = createSlice({
    name: 'users',
    initialState: { data: [], loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            // Redux требует ручного обновления данных через экшены
            .addCase(fetchUsersThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchUsersThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

const store = configureStore({ reducer: { users: usersSlice.reducer } });
export default store;
