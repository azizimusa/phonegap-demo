angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.accelerometer', {
      url: "/accelerometer",
      views: {
        'home-tab': {
          templateUrl: "accelerometer.html"
        }
      }
    })
	.state('tabs.camera', {
      url: "/camera",
      views: {
        'home-tab': {
          templateUrl: "camera.html"
        }
      }
    })
	.state('tabs.capture', {
      url: "/capture",
      views: {
        'home-tab': {
          templateUrl: "capture.html"
        }
      }
    })
	.state('tabs.compass', {
      url: "/compass",
      views: {
        'home-tab': {
          templateUrl: "compass.html"
        }
      }
    })
	.state('tabs.connection', {
      url: "/connection",
      views: {
        'home-tab': {
          templateUrl: "connection.html"
        }
      }
    })
	.state('tabs.contacts', {
      url: "/contacts",
      views: {
        'home-tab': {
          templateUrl: "contacts.html"
        }
      }
    })
	.state('tabs.device', {
      url: "/device",
      views: {
        'home-tab': {
          templateUrl: "device.html"
        }
      }
    })
	.state('tabs.battery', {
      url: "/battery",
      views: {
        'home-tab': {
          templateUrl: "battery.html"
        }
      }
    })
	.state('tabs.location', {
      url: "/location",
      views: {
        'home-tab': {
          templateUrl: "location.html"
        }
      }
    })	
	.state('tabs.file', {
      url: "/file",
      views: {
        'home-tab': {
          templateUrl: "file.html"
        }
      }
    })
    .state('tabs.globalization', {
      url: "/globalization",
      views: {
        'home-tab': {
          templateUrl: "globalization.html"
        }
      }
    })
	.state('tabs.browser', {
      url: "/browser",
      views: {
        'home-tab': {
          templateUrl: "browser.html"
        }
      }
    })
	.state('tabs.media', {
      url: "/media",
      views: {
        'home-tab': {
          templateUrl: "media.html"
        }
      }
    })
	.state('tabs.notification', {
      url: "/notification",
      views: {
        'home-tab': {
          templateUrl: "notification.html"
        }
      }
    })
	.state('tabs.storage', {
      url: "/storage",
      views: {
        'home-tab': {
          templateUrl: "storage.html"
        }
      }
    })
	.state('tabs.localstorage', {
      url: "/localstorage",
      views: {
        'home-tab': {
          templateUrl: "localstorage.html"
        }
      }
    })
	.state('tabs.websql', {
      url: "/websql",
      views: {
        'home-tab': {
          templateUrl: "websql.html"
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "about.html"
        }
      }
    })    
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "contact.html"
        }
      }
    });

   $urlRouterProvider.otherwise("/tab/home");

})

.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');
});