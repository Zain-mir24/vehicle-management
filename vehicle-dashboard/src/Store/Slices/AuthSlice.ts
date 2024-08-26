/* eslint-disable @typescript-eslint/no-empty-object-type */
import { createSlice } from "@reduxjs/toolkit";
import url from "config/index";
import type { PayloadAction } from "@reduxjs/toolkit";


type LoginData = {
  authData: {};
};
type AuthData = {};

export const SignupApi = async (data:{
  username:string,email:string,password:string
}) => {
  try {
    console.log(data);
    const response = await url.post("/auth/signup",data);
    console.log("response", response);
    return response
  } catch (err:Error) {
    console.log(err);
    return err.response
  }
};

export const SignupVerify = async () => {
  try {
    const response = await url.get("/auth/signup/confirm");
    return response
  } catch (e: Error) {
    return e.response
  }
}

export const SigninApi = async (data: {
  email: string;
  password: string;
}) => {
  try {
    const response = await url.post("/auth/login", data);
    return response
  } catch (e: Error) {
    return e.response
  }
}

const initialState: LoginData = {
  authData: {},
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<AuthData>) => {
      state.authData = action.payload;
    },
  },
});
export const { setAuthData } = authSlice.actions;
export default authSlice.reducer;
