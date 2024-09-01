/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice } from "@reduxjs/toolkit";
import url from "config/index";
type car = {
    carData: {};
};

const initialState: car = {
  carData: {},
};

export const getAllCars = async () => {
  try {
    const response = await url.get("/cars");
    console.log("response", response);
    return response
  } catch (err: unknown) {
    const error = err as Error
    return error
  }
};

export const addCarsApi = async (data:{
    categoryId: string,
    make: string,
    model: string,
    registrationNo: string,
    color: string,
    year: string
  }) => {
  try {
   
console.log(data);
    const body = {
      ...data,
      year: parseInt(data.year)
    }
    const response = await url.post("/cars",body);
    console.log("response", response);
    console.log(data)
    return 
  } catch (err: unknown) {
    const error = err as Error
    return error
  }
}

export const editCarApi = async (data:{id:string,data:{
  categoryId?: string,
  make?: string,
  model?: string,
  registrationNo?: string,
  color?: string,
  year?: string
}}) => {
  try {
    const body = {
      ...data.data,
      year: parseInt(data.data?.year || "0")
    }
    const response = await url.patch(`/cars/${data.id}`,body);
    console.log("response", response);
    return response
  } catch (err: unknown) {
    const error = err as Error
    return error
  }
}

export const deleteCarApi = async (id:string) => {
  try {
    const response = await url.delete(`/cars/${id}`);
    console.log("response", response);
    return response
  } catch (err: unknown) {
    const error = err as Error
    return error
  }
}

export const totalCarsApi = async () => {
  try {
    const response = await url.get(`/cars/total/number`);
    console.log("response", response);
    return response
  } catch (err: unknown) {
    const error = err as Error
    return error
  }
}

const carSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCar: (state, action: PayloadAction<car>) => {
      state.carData = action.payload;
    }
  },
});
export const { setCar } = carSlice.actions;
export default carSlice.reducer;