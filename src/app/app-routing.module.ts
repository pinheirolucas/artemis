import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthComponent } from "./auth/auth.component";
import { ShotListComponent } from "./shot-list/shot-list.component";
import { ShotComponent } from "./shot/shot.component";


const routes: Routes = [
	{
		"path": "shots",
		"component": ShotListComponent,
		"children": [
			{
				"path": ":id",
				"component": ShotComponent
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
	exports: [RouterModule]
})
export class AppRoutingModule { }
