import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { AppState } from "../state/state.module";


@Component({
	selector: "artemis-shot-list",
	templateUrl: "./shot-list.component.html",
	styleUrls: ["./shot-list.component.sass"]
})
export class ShotListComponent implements OnInit {
	private readonly _store: Store<AppState>;

	public cardSize: Observable<string>;

	constructor(store: Store<AppState>) {
		this._store = store;

		this.cardSize = this._store.select("cardSize");
	}

	ngOnInit() {
	}

}
