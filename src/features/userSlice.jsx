import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initialState: {
    loading: false,
    error: false,
    users: [],
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getUserSuccess: (state, { payload }) => {
      state.loading = false;
      state.users = payload;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  createUserSuccess,
  updateUserSuccess,
  getUserSuccess,
  fetchFail,
} = userSlice.actions;
export default userSlice.reducer;
