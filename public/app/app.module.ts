import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SimpleApiClient } from 'simple-api-client-ng2';

import { AppComponent } from './app.component';
import { DataComponent } from './data.component';
import { DemoComponent } from './demo.component';
import { ErrorComponent } from './error.component';
import { InfoComponent } from './info.component';
import { ApiService } from './api.service';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	declarations: [
		AppComponent,
		DataComponent,
		DemoComponent,
		ErrorComponent,
		InfoComponent
	],
	providers: [
		ApiService,
		SimpleApiClient
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }