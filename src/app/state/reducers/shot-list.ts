import { Action } from "@ngrx/store";

import { Shot } from "../../shot-list/shot-list.model";


const initialState: Shot[] = [];

export const SHOT_LIST_MORE = "SHOT_LIST_MORE";
export const SHOT_LIST_SET = "SHOT_LIST_SET";

export function shotListReducer(state: Shot[] = initialState, action: Action): Shot[] {
	switch (action.type) {
	case SHOT_LIST_MORE:
		return state.concat(action.payload);
	case SHOT_LIST_SET:
		return action.payload;
	default:
		return state;
	}
}
