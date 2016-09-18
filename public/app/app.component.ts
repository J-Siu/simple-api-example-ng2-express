import {Component, OnInit} from '@angular/core';
import {ApiService}from'./api.service';

@Component({
	'selector': 'app-component',
	'template': `
		<h3>{{title}}</h3>
		<div>API setup:{{api}}</div>
		<div class="border"><demo-component></demo-component></div>
		<div class="border"><info-component></info-component></div>
		<div class="border"><data-component></data-component></div>
		<div class="border"><error-component></error-component></div>
		`,
	'styles' : [`
		.border {
			padding: 1px;
			margin: 1px;
			border: solid;
			border-width: 1px;
			border-collapse: collapse;
		}`]
})
export class AppComponent implements OnInit {
	title = 'Angular2 Simple Api Example';

	api = '';
	constructor(private as: ApiService) { }

	ngOnInit() {
		this.api = JSON.stringify(this.as.list());
	}
}