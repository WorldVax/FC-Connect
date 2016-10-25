"use strict";

angular.module('app.services')

    .factory('CvxService', function ($log, Cvx) {

        var data = Cvx;

        var self = {
            asOptions: function () {
                return _.chain(Cvx)
                    .filter(function (item) {
                        return item.VaccineStatus == 'Active' && !item.NonVaccine;
                    })
                    .map(function (item) {
                        return {
                            code: item.CvxCode,
                            desc: item.Description,
                            name: item.VaccineName,
                            note: item.Note
                        };
                    })
                    .sortBy(function(item)
                    {
                        return item.desc;
                    })
                    .value();
            }
        }

        return self;
    });
