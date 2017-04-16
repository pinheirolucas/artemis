import { Component, Input } from "@angular/core";


@Component({
	selector: "artemis-shot-card",
	templateUrl: "./shot-card.component.html",
	styleUrls: ["./shot-card.component.sass"]
})
export class ShotCardComponent {
	@Input() uri: string;
	@Input() shotId: number;
	@Input() likes: number;
}
