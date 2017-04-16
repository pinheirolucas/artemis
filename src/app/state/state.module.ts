import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import { cardSizeReducer } from "./reducers/card-size";
import { paginationReducer } from "./reducers/pagination";
import { shotListReducer } from "./reducers/shot-list";
import { Shot } from "../shot-list/shot-list.model";


export interface AppState {
	cardSize: string;
	pagination: number;
	shots: Shot[];
}

@NgModule({
	imports: [
		StoreModule.provideStore({
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
