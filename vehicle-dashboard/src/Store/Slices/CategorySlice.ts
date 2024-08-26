/* eslint-disable @typescript-eslint/no-empty-object-type */
import { createSlice } from "@reduxjs/toolkit";
import url from "config/index";
type category = {
    categoryData: {};
};

const initialState: category = {
  categoryData: {},
};

export const getAllCategory = async () => {
  try {
    const response = await url.get("/categories");
    console.log("response", response);
    return response
  } catch (err: Error) {
    console.log(err);
    return err.response
  }
};

export const addCategory = async (data:{name: string}) => {
  try {
    const response = await url.post("/categories",data);
    console.log("response", response);
    return response
  } catch (err: Error) {
    console.log(err);
    return err.response
  }
}
  
const catgorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
  },
});

export default catgorySlice.reducer;