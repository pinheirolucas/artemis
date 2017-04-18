import { Injectable } from "@angular/core";
import { Http, RequestOptionsArgs, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { environment } from "../../environments/environment";
import { AuthService } from "../auth/auth.service";
import { Shot, Like } from "./shot.model";


@Injectable()
export class ShotService {

	private readonly _authService: AuthService;
	private readonly _http: Http;
	private readonly _namespace: string;

	constructor(authService: AuthService, http: Http) {
		this._authService = authService;
		this._http = http;
		this._namespace = "https://api.dribbble.com/v1";
	}

	public getShot(id: number): Observable<Shot> {
		const url = `${this._namespace}/shots/${id}`;
		const args: RequestOptionsArgs = {
			"search": {
				"access_token": environment.dribbble.token
			}
		};

		return this._http.get(url, args)
			.map(response => response.json());
	}

	public liked(id: number): Observable<Response> {
		const url = `${this._namespace}/shots/${id}/like`;
		const args: RequestOptionsArgs = {
			"headers": this._authService.getAuthenticatedHeaders(),
			"search": {
				"access_token": environment.dribbble.token
			}
		};

		return this._http.get(url, args);
	}

	public like(id: number): Observable<Like> {
		const url = `${this._namespace}/shots/${id}/like`;
		const args: RequestOptionsArgs = {
			"headers": this._authService.getAuthenticatedHeaders(),
			"search": {
				"access_token": environment.dribbble.token
			}
		};

		return this._http.post(url, {}, args)
			.map(response => response.json());
	}

	public unlike(id: number): Observable<null> {
		const url = `${this._namespace}/shots/${id}/like`;
		const args: RequestOptionsArgs = {
			"headers": this._authService.getAuthenticatedHeaders(),
			"search": {
				"access_token": environment.dribbble.token
			}
		};

		return this._http.delete(url, args)
			.map(response => response.json());
	}

}
