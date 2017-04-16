import { Component, Inject } from "@angular/core";
import { MdDialogRef, MD_DIALOG_DATA } from "@angular/material";
import { Observable } from "rxjs/Observable";

import { Shot } from "../shot/shot.model";


@Component({
	selector: "artemis-shot-dialog",
	templateUrl: "./shot-dialog.component.html",
	styleUrls: ["./shot-dialog.component.sass"]
})
export class ShotDialogComponent {

	private readonly _dialogRef: MdDialogRef<ShotDialogComponent>;

	public shot: Shot;

	constructor(dialogRef: MdDialogRef<ShotDialogComponent>, @Inject(MD_DIALOG_DATA) data: Observable<Shot>) {
		this._dialogRef = dialogRef;

		data.subscribe(shot => this.shot = shot);
	}

}
