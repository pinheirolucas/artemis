import { Injectable } from "@angular/core";
import {
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	Resolve,
	Router
} from "@angular/router";
import { Observable } from "rxjs/Observable";

import { Shot } from "./shot.model";
import { ShotService } from "./shot.service";


@Injectable()
export class ShotResolver implements Resolve<Shot> {

	private readonly _router: Router;
	private readonly _shotService: ShotService;

	constructor(router: Router, shotService: ShotService) {
		this._router = router;
		this._shotService = shotService;
	}

	public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Shot> {
		const shotId: number = +route.params["id"];

		if (shotId === NaN) {
			this._router.navigate(["/shots"]);
			return null;
		}

		return this._shotService.getShot(shotId);
	}

}
