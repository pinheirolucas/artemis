import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ShotDialogComponent } from "./shot-dialog.component";

describe("ShotDialogComponent", () => {
	let component: ShotDialogComponent;
	let fixture: ComponentFixture<ShotDialogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ShotDialogComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ShotDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
