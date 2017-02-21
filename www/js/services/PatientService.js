"use strict";

angular.module('app.services')

    .factory('PatientService', function ($log, pouchDB, SettingsService) {

        var current = null;
        var patientList = [];
        var searchQuery = '';

        var db = pouchDB(SettingsService.dbName);

        return {
            create: function () {
                // return a blank patient template object
                return {
                    "contact": {
                        "email": { "personal": "" },
                        "phone": { "cell": "", "work": "" }
                    },
                    "address": { "street": "", "city": "", "state": "", "postalCode": "" },
                    "geo": { "latitude": "", "longitude": "" },
                    "docType": "medical",
                    "identity": {
                        "firstName": "",
                        "lastName": "",
                        "governmentId": "",
                        "gender": "",
                        "race": "",
                        "dob": "",
                        "picture": ""
                    },
                    "medical": {
                        "history": [],
                        "series": []
                    }
                }
            },
            read: function (id) {
                return db.get(id)
                    .catch($log.error);
            },
            save: function (doc) {
                if(doc && !doc._id) {
                    // create the document and populate the _id property
                    return db.post(doc).catch($log.error);
                }
                // update the document
                return db.put(doc)
                    .catch($log.error);
            }
        };
    });
