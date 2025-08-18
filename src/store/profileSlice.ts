import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState
{
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    phone:string
}

const initialState: ProfileState = {
    firstName: "",
  lastName: "",
  email: "",
  gender: "",
  phone: "",
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        updateProfile: (state, action:PayloadAction<Partial<ProfileState>>) =>
        {
            return {...state,...action.payload}
        }
    }
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;