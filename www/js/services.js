"use strict";

angular.module('app.services', [])

    .factory('PatientService', function ($log, pouchDB, SettingsService) {

        var current = null;

        var db = pouchDB(SettingsService.dbOptions);

        return {
            filter: function (query) {
                query = query.toLowerCase();

                return db.query('patients/by_name', {
                    'startkey': query,
                    'endkey': query + '\u9999',
                    'include_docs': true
                }).then(function (data) {
                    return _.map(data.rows, function (row) {
                        return row.doc;
                    });
                }).catch($log.error)
            },
            read: function (id) {
                return db.get(id)
                    .catch($log.error);
            },
            save: function (doc) {
                return db.put(doc)
                    .catch($log.error);
            }
        };
    })

    .factory('CdsiService', function ($log, CdsiData) {

        var data = CdsiData;

        var self = {
            asOptions: function () {
                return _.chain(CdsiData.cvx)
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
    })

    .factory('SettingsService', function ($log, pouchDB, MedicalData) {

        var self = {
            dbOptions: {
                name: 'medical.db',
                adapter: 'websql'
            },
            dbInfo: {},
            syncUrl: '',
            syncCredentials: '',
            createDb: function () {
                // todo save the options as a doc after the db is initialized
                $log.log('Initialize database.');
                pouchDB(self.dbOptions)
                    .destroy().then(function () {
                        $log.log('Load medical database design documents.');
                        pouchDB(self.dbOptions)
                            .bulkDocs(MedicalData.design_docs)
                            .then(self.infoDb)
                    });
            },
            loadDb: function () {
                $log.log('Loading fake patient data.');
                pouchDB(self.dbOptions)
                    .bulkDocs(MedicalData.patients)
                    .then(self.infoDb)
            },
            infoDb: function () {
                pouchDB(self.dbOptions)
                    .info()
                    .then(function (info) { self.dbInfo = info; });
            },
            replicate: function () {
                // TODO Replicate with the server located at syncUrl using the 
                // syncCredentials for authentication
            }
        };

        self.infoDb();

        return self;
    });
