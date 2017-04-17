import { Injectable } from "@angular/core";
import { Http, RequestOptionsArgs } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { AuthService } from "../auth/auth.service";
import { User } from "./user.model";


@Injectable()
export class UserService {

	private readonly _authService: AuthService;
	private readonly _http: Http;
	private readonly _namespace: string;

	constructor(authService: AuthService, http: Http) {
		this._authService = authService;
		this._http = http;
		this._namespace = "https://api.dribbble.com/v1";
	}

	public getAuthenticatedUser(): Observable<User> {
		const url = `${this._namespace}/user`;
		const args: RequestOptionsArgs = {
			"headers": this._authService.getAuthenticatedHeaders()
		};

		return this._http.get(url, args)
			.map(response => response.json());
	}

}
