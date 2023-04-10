import { contactSlice } from "./features/contactSlice";
import { configureStore } from "@reduxjs/toolkit";
import { gallerySlice } from "./features/gallerySlice";
import { portraitsSlice } from "./features/portraitsSlice";

export const store = configureStore({
	reducer: {
		gallerySlice: gallerySlice.reducer,
		portraitsSlice: portraitsSlice.reducer,
		contactSlice: contactSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
