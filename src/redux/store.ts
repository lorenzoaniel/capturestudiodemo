import { configureStore } from "@reduxjs/toolkit";
import { gallerySlice } from "./features/gallerySlice";

export const store = configureStore({
	reducer: {
		gallerySlice: gallerySlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
