import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import { AppState } from "../state/state.module";
import { SHOT_LIST_MORE } from "../state/reducers/shot-list";
import { PAGINATION_NEXT } from "../state/reducers/pagination";
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
export class ShotListComponent implements OnInit, OnDestroy {
	private readonly _router: Router;
	private readonly _route: ActivatedRoute;
	private readonly _store: Store<AppState>;
	private readonly _shotListService: ShotListService;
	private _paginationSubscription: Subscription;

	public cardSize: Observable<string>;
	public shots: Observable<Shot[]>;
	public pagination: Observable<number>;

	constructor(router: Router, route: ActivatedRoute, shotListService: ShotListService, store: Store<AppState>) {
		this._router = router;
		this._route = route;
		this._shotListService = shotListService;
		this._store = store;

		this.cardSize = this._store.select("cardSize");
		this.shots = this._store.select("shots");
		this.pagination = this._store.select("pagination");
	}

	public ngOnInit() {
		this._paginationSubscription = this.pagination.subscribe(page => {
			let shotsLength: number;
			this.shots.subscribe(shots => shotsLength = shots.length);

			if ((page !== 1) || !shotsLength) {
				this._shotListService.getShotList(page)
					.subscribe(shots => this._store.dispatch({
						"type": SHOT_LIST_MORE,
						"payload": shots
					}));
			}
		});
	}

	public ngOnDestroy() {
		this._paginationSubscription.unsubscribe();
	}

	public loadMore() {
		this._store.dispatch({
			"type": PAGINATION_NEXT
		});
	}

	public selectShot(shot: Shot) {
		this._router.navigate(["/shots", shot.id]);
	}

}
