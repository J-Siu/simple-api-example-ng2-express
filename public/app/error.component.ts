import {Component} from '@angular/core';
import {ApiService}from'./api.service';

@Component({
	'selector': 'error-component',
	'template': `
		<h3>{{title}}</h3>
		<div><button (click)="notExist()">API not exist</button>Check console</div>
		`
})
export class ErrorComponent {
	title = 'Error handling';

	replyNum = '';
	replyObj = '';
	replyStr = '';

	constructor(private as: ApiService) { }

	notExist() {
		this.as.demo.call('notexist', '', r => this.replyNum = r);
	}

}
