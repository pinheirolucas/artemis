import { Action } from "@ngrx/store";


const initialState = 1;

export const PAGINATION_NEXT = "PAGINATION_NEXT";
export const PAGINATION_SET = "PAGINATION_SET";

export function paginationReducer(state: number = initialState, action: Action): number {
	switch (action.type) {
	case PAGINATION_NEXT:
		return state + 1;
	case PAGINATION_SET:
		return action.payload;
	default:
		return state;
	}
}
