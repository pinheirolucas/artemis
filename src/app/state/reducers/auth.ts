import { Action } from "@ngrx/store";


const initialState = false;

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export function authReducer(state: boolean = initialState, action: Action): boolean {
	switch (action.type) {
	case LOGIN:
		return true;
	case LOGOUT:
		return false;
	default:
		return state;
	}
}
