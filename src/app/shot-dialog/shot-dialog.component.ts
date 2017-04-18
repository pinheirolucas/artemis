import { Component, Inject, OnInit } from "@angular/core";
import { MdDialogRef, MD_DIALOG_DATA } from "@angular/material";
import { Observable } from "rxjs/Observable";

import { ShotService } from "../shot/shot.service";
import { Shot } from "../shot/shot.model";


@Component({
	selector: "artemis-shot-dialog",
	templateUrl: "./shot-dialog.component.html",
	styleUrls: ["./shot-dialog.component.sass"]
})
export class ShotDialogComponent implements OnInit {

	private readonly _shotService: ShotService;
	private readonly _dialogRef: MdDialogRef<ShotDialogComponent>;

	public shot: Shot;
	public liked: boolean;

	constructor(
		dialogRef: MdDialogRef<ShotDialogComponent>,
		@Inject(MD_DIALOG_DATA) data: Observable<Shot>,
		shotService: ShotService
	) {
		this._shotService = shotService;
		this._dialogRef = dialogRef;

		data.subscribe(shot => this.shot = shot);
	}

	public like() {
		this._shotService.like(this.shot.id)
			.subscribe(() => {
				this.liked = true;
				this.shot.likes_count++;
			});
	}

	public unlike() {
		this._shotService.unlike(this.shot.id)
			.subscribe(() => {
				this.liked = false;
				this.shot.likes_count--;
			});
	}

	public ngOnInit() {
		this._shotService.liked(this.shot.id)
			.subscribe(
				() => this.liked = true,
				() => this.liked = false
			);
	}

}
