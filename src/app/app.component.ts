import { Component } from "@angular/core";


@Component({
	selector: "artemis-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.sass"]
})
export class AppComponent {
	public title: string;

	constructor() {
		this.title = "artemis works!";
	}
}
