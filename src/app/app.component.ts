import { Component } from "@angular/core";
import { Store } from "@ngrx/store";

import { ShotCardSize } from "./shared/shot-card/shot-card.enum";
import { Option } from "./shared/header/header.component";
import { AppState } from "./state/state.module";
import {
	SET_CARD_SMALL,
	SET_CARD_MEDIUM,
	SET_CARD_LARGE
} from "./state/reducers/card-size";


@Component({
	selector: "artemis-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.sass"]
})
export class AppComponent {
	private readonly _store: Store<AppState>;

	public title: string;

	constructor(store: Store<AppState>) {
		this._store = store;

		this.title = "artemis works!";
	}

	public handleLogout() {
		console.log("logout");
	}

	public handleLogin() {
		console.log("login");
	}

	public setCardSize(option: Option) {
		switch (option.size) {
		case ShotCardSize.SMALL:
			this._store.dispatch({
				"type": SET_CARD_SMALL
			});
			break;
		case ShotCardSize.MEDIUM:
			this._store.dispatch({
				"type": SET_CARD_MEDIUM
			});
			break;
		case ShotCardSize.LARGE:
			this._store.dispatch({
				"type": SET_CARD_LARGE
			});
			break;
		}
	}
}
