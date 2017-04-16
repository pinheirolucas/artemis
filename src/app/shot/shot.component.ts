import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { MdDialog, MdDialogRef, MdDialogConfig } from "@angular/material";
import { Subscription } from "rxjs/Subscription";

import { ShotDialogComponent } from "../shot-dialog/shot-dialog.component";


@Component({
	selector: "artemis-shot",
	templateUrl: "./shot.component.html",
	styleUrls: ["./shot.component.sass"]
})
export class ShotComponent implements OnInit, OnDestroy {
	private readonly _dialog: MdDialog;
	private readonly _router: Router;
	private readonly _route: ActivatedRoute;
	private _dialogRef: MdDialogRef<ShotDialogComponent>;
	private _dialogSubscription: Subscription;

	constructor(dialog: MdDialog, router: Router, route: ActivatedRoute) {
		this._dialog = dialog;
		this._router = router;
		this._route = route;
	}

	public ngOnInit() {
		const config: MdDialogConfig = {
			"data": this._route.data.map(data => data["shot"])
		};

		this._dialogRef = this._dialog.open(ShotDialogComponent, config);
		this._dialogSubscription = this._dialogRef.afterClosed()
			.subscribe(result => this._router.navigate(["/shots"]));
	}

	public ngOnDestroy() {
		this._dialogSubscription.unsubscribe();
	}

}
