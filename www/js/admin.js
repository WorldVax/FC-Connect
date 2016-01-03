"use strict";

angular.module('app.admin', [])
    .factory('Admin', function (pouchDB, MedicalData) {
        function load(db, docs, msg) {
            console.log('Loading ' + msg);
            return db.bulkDocs(docs);
        };

        var self = {
            options: {
                name: 'medical.db',
                adapter: 'websql'
            },
            initialize: function () {
                console.log('Initialize database.');
                pouchDB(self.options)
                    .destroy().then(function () {
                        console.log('Load medical database design documents.');
                        pouchDB(self.options)
                            .bulkDocs(MedicalData.design_docs).then(function () {
                                console.log('Load medical database patient documents.');
                                pouchDB(self.options)
                                    .bulkDocs(MedicalData.patients).then(function () {
                                        pouchDB(self.options).info().then(function (info) { console.log(info) })
                                    })
                            })
                    });
            }
        };
        return self;
    });