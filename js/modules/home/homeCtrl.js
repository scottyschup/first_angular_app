angular
  .module('firstApp')
  .controller('HomeCtrl', homeCtrl);

function homeCtrl (apiMonkey) {
  var self = this;

  self.message = 'The app routing is working!';
  self.message2 = 'No server data, yet.';
  self.pingAPIServer = pingAPIServer;

  function pingAPIServer () {
    apiMonkey.ping()
      .then(function (message) {
        self.message2 = message;
      });
  }
}
