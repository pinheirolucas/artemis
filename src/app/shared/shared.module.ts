import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "@angular/material";

import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./search/search.component";


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MaterialModule.forRoot()
	],
	declarations: [HeaderComponent, SearchComponent],
	exports: [HeaderComponent]
})
export class SharedModule { }
