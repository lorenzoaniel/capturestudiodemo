import { contactSlice } from "./features/contactSlice";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { gallerySlice } from "./features/gallerySlice";
import { portraitsSlice } from "./features/portraitsSlice";

const ignoredPaths = ["gallerySlice.galleryProjects", "portraitsSlice.portraitsPrimary"]; //used to get rid of serializable error, this is a demo and this data is currently static

export const store = configureStore({
	reducer: {
		gallerySlice: gallerySlice.reducer,
		portraitsSlice: portraitsSlice.reducer,
		contactSlice: contactSlice.reducer,
	},
	//used to get rid of serializable error, this is a demo and this data is currently static
	middleware: (getDefaultMiddleware) => [
		...getDefaultMiddleware({
			serializableCheck: {
				ignoredPaths: ignoredPaths,
			},
		}),
	],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
