import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface initialState {
	main: {
		title: string;
		desc: string;
	};
}

const initialState: initialState = {
	main: {
		title: "Capture the world with us",
		desc: "Libero justo laoreet sit amet cursus sit amet dictum sit. Consequat nisl vel pretium lectus. In ornare quam viverra orci sagittis eu volutpat odio. Euismod nisi porta lorem mollis aliquam ut porttitor leo ac felis.",
	},
};

export const contactSlice = createSlice({
	name: "contactSlice",
	initialState,
	reducers: {},
});

export const selectContactInfo = (state: RootState) => state.contactSlice;

export default contactSlice.reducer;
