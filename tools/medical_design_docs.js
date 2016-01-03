module.exports = (function () {
	return [
		{
			_id: '_design/patients',
			views: {
				by_name: {
					map: function f(doc) {
						if (doc.docType == 'medical') {
							for (var str in [doc.identity.lastName, doc.identity.firstName]) {
								for (var i = 0; i < str.length; i++) {
									emit(str.slice(i), doc);
								}
							}
						}
					}.toString()
				}
			}
		}
	];
})();