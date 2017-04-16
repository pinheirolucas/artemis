import { Component, OnInit } from "@angular/core";


@Component({
	selector: "artemis-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.sass"]
})
export class HeaderComponent implements OnInit {

	public placeholder: string;

	constructor() {
		this.placeholder = "Pesquisar shots";
	}

	ngOnInit() {
	}

}
