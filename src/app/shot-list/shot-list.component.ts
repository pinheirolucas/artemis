import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { AppState } from "../state/state.module";
import { ShotListService } from "./shot-list.service";
import { Shot } from "./shot-list.model";


@Component({
	selector: "artemis-shot-list",
	templateUrl: "./shot-list.component.html",
	styleUrls: ["./shot-list.component.sass"],
	providers: [
		ShotListService
	]
})
export class ShotListComponent implements OnInit {
	private readonly _router: Router;
	private readonly _store: Store<AppState>;
	private readonly _shotListService: ShotListService;

	public cardSize: Observable<string>;
	public shots: Observable<Shot[]>;

	constructor(router: Router, shotListService: ShotListService, store: Store<AppState>) {
		this._router = router;
		this._shotListService = shotListService;
		this._store = store;

		this.cardSize = this._store.select("cardSize");
	}

	public ngOnInit() {
		this.shots = this._shotListService.getShotList();
	}

	public selectShot(shot: Shot) {
		this._router.navigate(["/shots", shot.id]);
	}

}
