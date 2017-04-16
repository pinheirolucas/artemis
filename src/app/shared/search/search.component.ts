import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
	selector: "artemis-search",
	templateUrl: "./search.component.html",
	styleUrls: ["./search.component.sass"]
})
export class SearchComponent {

	@Input() value: string;
	@Input() delay: number;
	@Input() placeholder: string;

	@Output() onTypeEnd: EventEmitter<string>;

	private _currentTimeout: any;

	constructor() {
		this.placeholder = "Pesquisar";
		this.value = "";
		this.delay = 300;
		this.onTypeEnd = new EventEmitter<string>();
	}

	public onType(event: string) {
		if (this._currentTimeout) {
			clearTimeout(this._currentTimeout);
		}

		this._currentTimeout = setTimeout(() => {
			this.onTypeEnd.emit(event);
			this._currentTimeout = null;
		}, this.delay);
	}

}
