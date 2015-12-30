"use strict";

angular.module('app.dbServices', [])
    .factory('DbService', function ($window) {

        var options = {
            name: 'data/medical.db',
            adapter: 'websql'
        }
        var db = new $window.PouchDB(options);

        return db;
    });