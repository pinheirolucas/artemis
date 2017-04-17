import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { Store } from "@ngrx/store";

import { AuthService } from "./auth/auth.service";
import { ShotCardSize } from "./shared/shot-card/shot-card.enum";
import { User } from "./user/user.model";
import { UserService } from "./user/user.service";
import { Option } from "./shared/header/header.component";
import { AppState } from "./state/state.module";
import {
	SET_CARD_SMALL,
	SET_CARD_MEDIUM,
	SET_CARD_LARGE
} from "./state/reducers/card-size";
import { LOGIN, LOGOUT } from "./state/reducers/auth";
import { environment } from "../environments/environment";


@Component({
	selector: "artemis-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.sass"],
	providers: [UserService]
})
export class AppComponent implements OnInit, OnDestroy {

	private readonly _authService: AuthService;
	private readonly _store: Store<AppState>;
	private readonly _userService: UserService;
	private _authenticatedSubscription: Subscription;

	public authenticated: Observable<boolean>;
	public title: string;
	public user: User;

	constructor(authService: AuthService, store: Store<AppState>, userService: UserService) {
		this._authService = authService;
		this._store = store;
		this._userService = userService;
		this.authenticated = this._store.select("authenticated");

		this.user = {};
		this.title = "artemis works!";
	}

	public ngOnInit() {
		if (this._authService.isAuthenticated()) {
			this._store.dispatch({
				"type": LOGIN
			});
		}

		this._authenticatedSubscription = this.authenticated.subscribe(authenticated => {
			if (authenticated) {
				this._userService.getAuthenticatedUser()
					.subscribe(user => this.user = user);
			} else {
				this._authService.logout();
			}
		});
	}

	public ngOnDestroy() {
		this._authenticatedSubscription.unsubscribe();
	}

	public handleLogout() {
		this._store.dispatch({
			"type": LOGOUT
		});
	}

	public handleLogin() {
		location.assign(environment.dribbble.authorizeUrl);
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
