/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore, combineReducers, Action } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AuthSlice from "./Slices/AuthSlice";
import SidebarSlice from "./Slices/SidebarSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const appReducer = combineReducers({
  auth: AuthSlice,
  sidebar: SidebarSlice,
});
const rootReducer = (state: any, action: Action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
