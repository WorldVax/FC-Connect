// Ionic Starter App
angular.module('app.refdata', []);
angular.module('app.controllers', []);
angular.module('app.services', []);

angular.module('app', ['ionic', 'app.refdata', 'app.services', 'app.controllers', 'pouchdb'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    })
  })

  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    if (ionic.Platform.isAndroid())
      $ionicConfigProvider.scrolling.jsScrolling(false);

    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'MenuController'
      })

      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'templates/home.html'
          }
        }
      })

      .state('app.search', {
        url: '/search',
        views: {
          'menuContent': {
            templateUrl: 'templates/search.html',
            controller: 'SearchController'
          }
        }
      })

      .state('app.patient', {
        url: '/patient/:patientId',
        views: {
          'menuContent': {
            templateUrl: 'templates/patient-view.html',
            controller: 'PatientController'
          }
        },
        params: {
          patientId: null
        }
      })

      .state('app.settings', {
        url: '/settings',
        views: {
          'menuContent': {
            templateUrl: 'templates/settings.html',
            controller: 'SettingsController'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
  });
