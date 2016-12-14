"use strict";

angular.module('app.services')

    .factory('SecurityService', function ($log, pouchDB, SettingsService) {

        var db = pouchDB(SettingsService.dbName);
        
        return {
            checkLogin: function (username, password) {
                // username = username.toLowerCase();

                // var docs = db.query('logins/by_login', {
                //     'key': username,
                //     'include_docs': true
                // })
                // .then(function (data) {
                //     data.rows.foreach(function (row){
                //         // if(row.password == password)
                //         return true;
                //     });
                //     return false;
                // })
                // .catch($log.error);

                if(username == "nrawal" && password == "abc123")
                    return true;
                else
                    return false;
            }
        };
    });
