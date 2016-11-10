"use strict";

angular.module('app.services')

    .factory('PatientService', function ($log, pouchDB, SettingsService) {

        var current = null;
        var patientList = [];
        var searchQuery = '';

        var db = pouchDB(SettingsService.dbName);

        return {
            read: function (id) {
                return db.get(id)
                    .catch($log.error);
            },
            save: function (doc) {
                return db.put(doc)
                    .catch($log.error);
            }
        };
    });
