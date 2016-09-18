import {Component} from '@angular/core';
import {ApiService}from'./api.service';

@Component({
	'selector': 'demo-component',
	'template': `
		<h3>{{title}}</h3>
		<div><input [(ngModel)]="echoMsg"><button (click)="echo()">Echo</button></div>
		<div>Echo Reply: {{echoReply}}</div>
		`
})
export class DemoComponent {
	title = 'Demo API';

	echoMsg = '';
	echoReply = '';
	errorReply = '';
	constructor(private as: ApiService) { }

	echo() {
		this.as.demo.call('echo', this.echoMsg, r => this.echoReply = r);
	}
	error() {
		this.as.demo.call('error', '', r => this.errorReply = r);
	}

	// Use default error handler
}