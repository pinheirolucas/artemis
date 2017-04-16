import { Injectable } from "@angular/core";
import { Http, RequestOptionsArgs } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { environment } from "../../environments/environment";
import { Shot } from "./shot.model";


@Injectable()
export class ShotService {

	private readonly _http: Http;
	private readonly _namespace: string;

	constructor(http: Http) {
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

}
