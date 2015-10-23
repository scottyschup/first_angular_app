angular
.module('firstApp', ['ui.router'])
.config(router);

function router ($locationProvider, $stateProvider, $urlRouterProvider) {
  // $locationProvider
  //   .html5Mode(true)
  //   .hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state({
      name: 'home',
      url: '/',
      controller: 'HomeCtrl',
      controllerAs: 'home',
      templateUrl: 'js/modules/home/home.html'
    })

    .state({
      name: 'names',
      url: '/names',
      controller: 'NamesCtrl',
      controllerAs: 'name',
      templateUrl: 'js/modules/names/names.html'
    });
}
