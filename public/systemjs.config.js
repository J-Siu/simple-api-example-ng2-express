(function (global) {
	System.config({
		paths: {
			'npm:': 'node_modules/'
		},
		// map tells the System loader where to look for things
		map: {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // other libraries
      'rxjs': 'npm:rxjs',
			'simple-api-client-ng2': 'npm:simple-api-client-ng2',
			'url-join': 'npm:url-join'
		},
		// packages tells the System loader how to load when no filename and/or no extension
		packages: {
			'app': { main: 'main.js', defaultExtension: 'js' },
			'rxjs': { main: 'bundles/Rx.min.js', defaultExtension: 'js' },
			'simple-api-client-ng2': { main: 'index.js', defaultExtension: 'js' },
			'url-join': { main: 'lib/url-join.js', defaultExtension: 'js' }
		}
	});
})(this);
