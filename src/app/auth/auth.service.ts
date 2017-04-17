import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptionsArgs } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { environment } from "../../environments/environment";
import { OAuthResponse } from "./auth.model";


@Injectable()
export class AuthService {
	private readonly _http: Http;
	private readonly _namespace: string;
	private readonly _storageKey: string;
	private _token: string;

	constructor(http: Http) {
		this._http = http;
		this._namespace = "https://dribbble.com/oauth/token";
		this._storageKey = "artemis#access_token";
		this._token = localStorage.getItem(this._storageKey);
	}

	public authenticate(code: string): Observable<OAuthResponse> {
		const url = `${this._namespace}`;
		const args: RequestOptionsArgs = {
			"search": {
				"client_id": environment.dribbble.client,
				"client_secret": environment.dribbble.secret,
				"code": code
			}
		};

		return this._http.post(url, {}, args)
			.map(response => response.json());
	}

	public setToken(token: string) {
		if (!this._token) {
			this._token = token;
			localStorage.setItem(this._storageKey, this._token);
		}
	}

	public isAuthenticated(): boolean {
		return Boolean(this._token);
	}

	public getAuthenticatedHeaders(): Headers {
		if (!this._token) {
			return new Headers();
		}

		return new Headers({
			"Authorization": `Bearer ${this._token}`
		});
	}
}
