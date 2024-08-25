import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";

type SidebarProps = {
  SidebarOpen: boolean;
};

const initialState: SidebarProps = {
  SidebarOpen: true,
};
const sidebarSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    ToogleSidebar: (state, action: PayloadAction<boolean>) => {
      state.SidebarOpen = action.payload;
    },
  },
});
export const { ToogleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
