"use strict";

angular.module('app.services')

.factory('CameraService', function ($q) {
        return {
            getPicture: function(options) {
                var q = $q.defer();

                navigator.camera.getPicture(function(result) {
                    console.log("cheese");
                    q.resolve(result);
                }, function(err) {
                    q.reject(err);
                }, options);

                return q.promise;
            }
        }
    });
