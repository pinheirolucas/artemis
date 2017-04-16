import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import {cardSizeReducer} from "./reducers/card-size";


export interface AppState {
	cardSize: string;
}

@NgModule({
	imports: [
		StoreModule.provideStore({
			cardSize: cardSizeReducer
		})
	],
	exports: [
		StoreModule
	]
})
export class StateModule { }
