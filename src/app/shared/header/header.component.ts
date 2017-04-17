import { Component, EventEmitter, Input, Output } from "@angular/core";

import { ShotCardSize } from "../shot-card/shot-card.enum";


@Component({
	selector: "artemis-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.sass"]
})
export class HeaderComponent {

	@Input() authenticated: boolean;
	@Input() avatar: string;
	@Input() name: string;

	@Output() onOption: EventEmitter<Option>;
	@Output() onLogin: EventEmitter<null>;
	@Output() onLogout: EventEmitter<null>;

	// public placeholder: string;
	public options: Option[];

	constructor() {
		this.onOption = new EventEmitter<Option>();
		this.onLogin = new EventEmitter<null>();
		this.onLogout = new EventEmitter<null>();

		// this.placeholder = "Pesquisar shots";
		this.options = [
			{
				"size": ShotCardSize.SMALL,
				"label": "Shots pequenas"
			},
			{
				"size": ShotCardSize.MEDIUM,
				"label": "Shots médias"
			},
			{
				"size": ShotCardSize.LARGE,
				"label": "Shots grandes"
			}
		];
	}

	public onLogoutClick() {
		this.onLogout.emit();
	}

	public onLoginClick() {
		this.onLogin.emit();
	}

	public onOptionClick(option: Option) {
		this.onOption.emit(option);
	}

}

export interface Option {
	size: ShotCardSize;
	label: string;
}
