import { Injectable } from "@angular/core";
import { Http, RequestOptionsArgs } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { environment } from "../../environments/environment";
import { Shot } from "./shot-list.model";


@Injectable()
export class ShotListService {

	private readonly _http: Http;
	private readonly _namespace: string;

	constructor(http: Http) {
		this._http = http;
		this._namespace = "https://api.dribbble.com/v1";
	}

	public getShotList(page: number = 1, perPage: number = 50): Observable<Shot[]> {
		const url = `${this._namespace}/shots`;
		const args: RequestOptionsArgs = {
			"search": {
				"access_token": environment.dribbble.token,
				"page": page,
				"per_page": perPage,
				"filter": "twitter"
			}
		};

		return this._http.get(url, args)
			.map(response => response.json());
	}

}
