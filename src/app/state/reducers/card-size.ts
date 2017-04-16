import { Action } from "@ngrx/store";


const initialState = "is-2";

export const SET_CARD_SMALL = "SET_CARD_SMALL";
export const SET_CARD_MEDIUM = "SET_CARD_MEDIUM";
export const SET_CARD_LARGE = "SET_CARD_LARGE";
export const RESET_CARD = "RESET_CARD";

export function cardSizeReducer(state: string = initialState, action: Action): string {
	switch (action.type) {
	case SET_CARD_MEDIUM:
		return "is-3";
	case SET_CARD_LARGE:
		return "is-5";
	case RESET_CARD:
	case SET_CARD_SMALL:
	default:
		return "is-2";
	}
}
