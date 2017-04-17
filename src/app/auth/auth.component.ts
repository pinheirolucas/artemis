import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { AuthService } from "./auth.service";


@Component({
	selector: "artemis-auth",
	templateUrl: "./auth.component.html",
	styleUrls: ["./auth.component.sass"]
})
export class AuthComponent implements OnInit {

	private readonly _authService: AuthService;
	private readonly _route: ActivatedRoute;
	private readonly _router: Router;

	constructor(authService: AuthService, route: ActivatedRoute, router: Router) {
		this._authService = authService;
		this._route = route;
		this._router = router;
	}

	public ngOnInit() {
		this._route.queryParams
			.subscribe(query => {
				const error: string = query["error"];
				const code: string = query["code"];

				if (!error && !code) {
					this._router.navigate(["/shots"]);
					return;
				}

				this._authService.authenticate(code)
					.subscribe(auth => this._authService.setToken(auth.access_token));
			});
	}

}
