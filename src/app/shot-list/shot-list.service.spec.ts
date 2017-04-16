import { TestBed, inject } from "@angular/core/testing";

import { ShotListService } from "./shot-list.service";

describe("ShotListService", () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ShotListService]
		});
	});

	it("should ...", inject([ShotListService], (service: ShotListService) => {
		expect(service).toBeTruthy();
	}));
});
