import { configureStore } from "@reduxjs/toolkit";
import favourite from "./Slice/favourite";
export const store = configureStore({
  reducer: { favourite },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
