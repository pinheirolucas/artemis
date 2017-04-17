import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptionsArgs } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

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
		const body = `client_id=${environment.dribbble.client}&client_secret=${environment.dribbble.secret}&code=${code}`;
		const args: RequestOptionsArgs = {
			"withCredentials": true,
			"headers": new Headers({
				"Content-Type": "application/x-www-form-urlencoded"
			})
		};

		return this._http.post(url, body, args)
			.map(response => response.json());
	}

	public login(token: string) {
		if (!this._token) {
			this._token = token;
			localStorage.setItem(this._storageKey, this._token);
		}
	}

	public logout() {
		if (this.isAuthenticated()) {
			this._token = null;
			localStorage.removeItem(this._storageKey);
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
