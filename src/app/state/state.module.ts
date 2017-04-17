import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import { authReducer } from "./reducers/auth";
import { cardSizeReducer } from "./reducers/card-size";
import { paginationReducer } from "./reducers/pagination";
import { shotListReducer } from "./reducers/shot-list";
import { Shot } from "../shot-list/shot-list.model";


export interface AppState {
	authenticated: boolean;
	cardSize: string;
	pagination: number;
	shots: Shot[];
}

@NgModule({
	imports: [
		StoreModule.provideStore({
			authenticated: authReducer,
			cardSize: cardSizeReducer,
			pagination: paginationReducer,
			shots: shotListReducer
		})
	],
	exports: [
		StoreModule
	]
})
export class StateModule { }
