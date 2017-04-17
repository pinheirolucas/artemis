import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";

import { AuthService } from "./auth.service";
import { AppState } from "../state/state.module";
import { LOGIN } from "../state/reducers/auth";


@Component({
	selector: "artemis-auth",
	templateUrl: "./auth.component.html",
	styleUrls: ["./auth.component.sass"]
})
export class AuthComponent implements OnInit {

	private readonly _authService: AuthService;
	private readonly _route: ActivatedRoute;
	private readonly _router: Router;
	private readonly _store: Store<AppState>;

	constructor(authService: AuthService, route: ActivatedRoute, router: Router, store: Store<AppState>) {
		this._authService = authService;
		this._route = route;
		this._router = router;
		this._store = store;
	}

	public ngOnInit() {
		this._route.queryParams
			.subscribe(query => {
				const code: string = query["code"];

				if (code && !this._authService.isAuthenticated()) {
					this._authService.authenticate(code)
						.subscribe(auth => {
							this._authService.login(auth.access_token);
							this._router.navigate(["/shots"]);
							this._store.dispatch({
								"type": LOGIN
							});
						});
					return;
				}

				this._router.navigate(["/shots"]);
			});
	}

}
