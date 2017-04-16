import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthComponent } from "./auth/auth.component";
import { ShotListComponent } from "./shot-list/shot-list.component";
import { ShotComponent } from "./shot/shot.component";
import { ShotResolver } from "./shot/shot.resolver";
import { ShotService } from "./shot/shot.service";


const routes: Routes = [
	{
		"path": "shots",
		"component": ShotListComponent,
		"children": [
			{
				"path": ":id",
				"component": ShotComponent,
				"resolve": {
					"shot": ShotResolver
				}
			}
		],
	},
	{
		"path": "auth",
		"component": AuthComponent
	},
	{
		"path": "**",
		"redirectTo": "shots"
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule],
	providers: [ShotResolver, ShotService]
})
export class AppRoutingModule { }
