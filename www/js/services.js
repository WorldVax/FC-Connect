"use strict";

angular.module('app.services', [])

    .factory('MedicalDbService', function (DbService) {
        return {
            all: function () {
                return DbService;
            },
            filter: function (query) {
                if (query == '') {
                    return [];
                } else {
                    var results = _.filter(DbService, function (item) {
                        var n = item.identity.lastName + item.identity.firstName;
                        var re = new RegExp(query, "i");
                        return re.test(n);
                    });
                    return results;
                }
            },
            remove: function (patient) {
                DbService.splice(DbService.indexOf(patient), 1);
            },
            get: function (id) {
                var patient = _.find(DbService, function (item) {
                    return item.patientId == id;
                });
                return patient;
            }
        };
    });
