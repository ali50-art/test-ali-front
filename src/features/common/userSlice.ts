import { APIResponse, UserProfile } from '@/helper/types';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { useAuth } from '@/lib/AuthProvider';
import axios from 'axios';
import auth from '@/lib/auth';


export const getUserInfo = createAsyncThunk<UserProfile, void>(
    "user/getUserInfo",
    async (thunkApi) => {
        const token=localStorage.getItem("token")
        
        const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/auth/user`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        
        // const response = await axios.get<APIResponse>("/workspace/home");
        // return response.data.payload;
        return {name: response.data.data.username, avatar : "https://reqres.in/img/faces/7-image.jpg", emailId : response.data.data.email}
    }
  );

const initialState: UserProfile = {
    name: "",
    avatar: "",
    emailId: "",
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        

       
    },

    extraReducers: (builder) => {
        builder.addCase(getUserInfo.pending, (state) => {
            
        });
        builder.addCase(getUserInfo.fulfilled, (state, action) => {
            console.log(action.payload)
            state.name = action.payload.name
            state.avatar = action.payload.avatar
        });
        builder.addCase(getUserInfo.rejected, (state) => {
            
        });
    }
});

export const {  } = userSlice.actions;

export default userSlice.reducer;
