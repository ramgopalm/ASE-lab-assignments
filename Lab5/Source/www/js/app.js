// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.config(function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
})



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  //Login screen
  .state('login', {
     url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
  })
  // the signup route
      .state('registration', {
        url: '/registration',
        templateUrl: 'templates/registration.html',
        data: {
          public: true
        }
      })
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:


  .state('tab.restaurants', {
      url: '/restaurants',
      views: {
        'tab-restaurants': {
          templateUrl: 'templates/tab-restaurants.html',
          controller: 'RestaurantsCtrl'
        }
      }
    })
    .state('tab.restaurant-detail', {
      url: '/restaurants/:restaurantId',
      views: {
        'tab-restaurants': {
          templateUrl: 'templates/restaurant-detail.html',
          controller: 'RestaurantDetailCtrl'
        }
      }
    })

  .state('tab.favorites', {
      url: '/favorites',
      views: {
        'tab-favorites': {
          templateUrl: 'templates/tab-favorites.html',
          controller: 'FavoritesCtrl'
        }
      },
      reload: true
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
