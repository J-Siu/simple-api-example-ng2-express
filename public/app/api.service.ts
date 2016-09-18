import {Injectable} from '@angular/core';
import {SimpleApiClient, SimpleApiObj} from 'simple-api-client-ng2';

@Injectable()
export class ApiService {
	data: SimpleApiObj;
	demo: SimpleApiObj;
	info: SimpleApiObj;
	constructor(private api: SimpleApiClient) {
		// demo use ng2-simple-api default error handler
		this.demo = this.api.get('/demo');

		// data replace ng2-simple-api default error handler
		this.info = this.api.get('/info');

		// data replace ng2-simple-api default error handler
		this.data = this.api.get('/data');
		// this.data.setErrorHandler();
	}

	list() {
		return this.api.list();
	}
}