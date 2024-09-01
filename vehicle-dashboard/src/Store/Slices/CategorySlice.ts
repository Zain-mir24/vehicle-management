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

export const addCategory = async (data:{name: string,id?:string}) => {
  try {
    const response = await url.post("/categories",{name:data.name});
    console.log("response", response);
    return response
  } catch (err: Error) {
    console.log(err);
    return err.response
  }
}

export const editCategory = async (data:{id:string,name: string}) => {
  try {
    const response = await url.patch(`/categories/${data.id}`,{name:data.name});
    console.log("response", response);
    return response
  } catch (err: Error) {
    console.log(err);
    return err.response
  }
}

export const deleteCategory = async (data:string) => {
  try {
    const response = await url.delete(`/categories/${data}`);
    console.log("response", response);
    return response
  } catch (err: Error) {
    console.log(err);
    return err.response
  }
}

export const totalCategoriesApi = async () => {
  try {
    const response = await url.get(`/categories/total/number`);
    console.log("response", response);
    return response
  } catch (err: unknown) {
    const error = err as Error
    return error
  }
}

const catgorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<category>) => {
      state.categoryData = action.payload;
    }
  },
});
export const { setCategories } = catgorySlice.actions;
export default catgorySlice.reducer;