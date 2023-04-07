import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface initialState {
	modalToggle: boolean;
	galleryProjects: Map<string, { src: string; date: string }>;
	prjShownAmount: number;
}

const initialState: initialState = {
	modalToggle: false,
	galleryProjects: new Map<string, { src: string; date: string }>([
		["Aisha Patel", { src: "../assets/images/projects/aishapatel.jpg", date: "2018" }],
		["Fatima Hassan", { src: "../assets/images/projects/fatimahassan.jpg", date: "2021" }],
		["Isabella Costa", { src: "../assets/images/projects/isabellacosta.jpg", date: "2022" }],
		["Aisha Patel Filler", { src: "../assets/images/projects/aishapatel.jpg", date: "2018" }],
		["Fatima Hassan Filler", { src: "../assets/images/projects/fatimahassan.jpg", date: "2021" }],
		["Isabella Costa Filler", { src: "../assets/images/projects/isabellacosta.jpg", date: "2022" }],
		["Aisha Patel Filler 2", { src: "../assets/images/projects/aishapatel.jpg", date: "2018" }],
		["Fatima Hassan Filler 2", { src: "../assets/images/projects/fatimahassan.jpg", date: "2021" }],
		[
			"Isabella Costa Filler 2",
			{ src: "../assets/images/projects/isabellacosta.jpg", date: "2022" },
		],
	]),
	prjShownAmount: 3,
};

export const gallerySlice = createSlice({
	name: "gallerySlice",
	initialState,
	reducers: {
		modalToggle: (state) => {
			state.modalToggle = !state.modalToggle;
		},
	},
});

export const { modalToggle } = gallerySlice.actions;

export const selectGalleryInfo = (state: RootState) => state.gallerySlice;

export default gallerySlice.reducer;
