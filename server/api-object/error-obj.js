exports.ErrorObj = {
	error(r) {
		// Throw error within callback will be passed to api client
		throw 'ErrorObj throw.';
	}
}
