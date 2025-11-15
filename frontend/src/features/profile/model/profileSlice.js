import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nickname: '',
  phone: '',
  email: '',
  avatar: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      const { nickname, phone, email, avatar } = action.payload;
      state.nickname = nickname;
      state.phone = phone;
      state.email = email;
      state.avatar = avatar;
    },
    resetProfile: () => initialState,
  },
});

export const { updateProfile, resetProfile } = profileSlice.actions;
export default profileSlice.reducer;