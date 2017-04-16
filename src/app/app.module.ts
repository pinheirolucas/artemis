import "hammerjs";
import { BrowserModule } from "@angular/platform-browser";
import { MaterialModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { AuthComponent } from "./auth/auth.component";
import { ShotListComponent } from "./shot-list/shot-list.component";
import { ShotComponent } from "./shot/shot.component";
import { StateModule } from "./state/state.module";


@NgModule({
	declarations: [
		AppComponent,
		AuthComponent,
		ShotListComponent,
		ShotComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		SharedModule,
		StateModule,
		MaterialModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
