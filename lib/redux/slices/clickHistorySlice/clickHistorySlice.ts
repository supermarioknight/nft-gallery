import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ClickHistoryState {
	images: string[];
}

const initialState: ClickHistoryState = {
	images: [],
};

export const clickHistorySlice = createSlice({
	name: "clickHistory",
	initialState,
	reducers: {
		addImageToHistory: (state, action: PayloadAction<string>) => {
			const lastItem = state.images[state.images.length - 1];
			if (lastItem !== action.payload) {
				state.images.push(action.payload);
			}
			console.log("state", state);
		},
	},
});

export const { addImageToHistory } = clickHistorySlice.actions;
