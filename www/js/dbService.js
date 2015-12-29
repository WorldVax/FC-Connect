"use strict";

angular.module('app.dbServices', [])
    .factory('DbService', function () {

        var PouchDB = require('pouchdb');
        var options = {
            name: 'data/medical.db',
            db: require('sqldown')
        }
        var db = new PouchDB(options);

        return db;
    });