#!/usr/bin/env node

var fs = require('fs');
var process = require('process');
var PouchDB = require('pouchdb');

var options = {
	name: 'medical.db',
	db: require('sqldown'),
	modules: ['./medical_design_docs', './medical_data']
};

fs.unlink(options.name, function (err) {

	var db = new PouchDB(options);

	Promise.all(options.modules.map(function (module) {
		var data = {
			docs: require(module)
		};
		return db.bulkDocs(data);
	}))
		.then(function () {
			process.exit(0);
		})
		.catch(console.log.bind(console));
});
