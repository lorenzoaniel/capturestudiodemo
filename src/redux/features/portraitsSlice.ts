import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface initialState {
	modalToggle: boolean;
	portraitsPrimary: Map<string, { src: string; date: string; isLeft: boolean; desc: string }>;
	portraitSecondary: {
		date: string;
		title: string;
		src: string;
	};
}

const initialState: initialState = {
	modalToggle: false,
	portraitsPrimary: new Map<string, { src: string; date: string; isLeft: boolean; desc: string }>([
		[
			"Gabriela Silva",
			{
				src: "../assets/images/portraits/gabrielasilva.png",
				date: "MARCH 2022",
				isLeft: false,
				desc: "Cras semper auctor neque vitae tempus. Neque volutpat ac tincidunt vitae. Eros donec ac odio tempor orci dapibus ultrices. Eget mauris pharetra et ultrices neque ornare. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Nunc id cursus metus aliquam eleifend mi.",
			},
		],
		[
			"Amara Lopez",
			{
				src: "../assets/images/portraits/amaralopez.png",
				date: "JANUARY 2010",
				isLeft: true,
				desc: "Tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Quam elementum pulvinar etiam non quam lacus suspendisse. Nunc sed velit dignissim sodales ut eu sem. Pretium quam vulputate dignissim suspendisse in est ante in nibh.",
			},
		],
		[
			"Priya Patel",
			{
				src: "../assets/images/portraits/priyapatel.png",
				date: "SEPTEMBER 2021",
				isLeft: false,
				desc: "Et malesuada fames ac turpis egestas maecenas pharetra convallis. Aenean vel elit scelerisque mauris. Gravida neque convallis a cras semper auctor neque vitae. Habitasse platea dictumst quisque sagittis. Gravida neque convallis a cras semper.",
			},
		],
	]),
	portraitSecondary: {
		title: "Victorian Collection",
		date: "NOVEMBER 2022",
		src: "../assets/images/portraits/victoriancollection.png",
	},
};

export const portraitsSlice = createSlice({
	name: "portraitsSlice",
	initialState,
	reducers: {
		modalToggle: (state) => {
			state.modalToggle = !state.modalToggle;
		},
	},
});

export const { modalToggle } = portraitsSlice.actions;

export const selectPortraitInfo = (state: RootState) => state.portraitsSlice;

export default portraitsSlice.reducer;
