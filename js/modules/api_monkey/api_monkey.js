angular
  .module('firstApp')
  .factory('apiMonkey', apiMonkey);

function apiMonkey ($http) {
  var apiFlyingMonkey = {};

  apiFlyingMonkey.API_SERVER = 'http://127.0.0.1:8080';
  apiFlyingMonkey.API_VERSION = '/v1';
  apiFlyingMonkey.get = get;
  apiFlyingMonkey.ping = ping;

  function get (path) {
    var url = this.API_SERVER + this.API_VERSION + path;
    return $http.get(url);
  }

  function ping () {
    return $http.get(this.API_SERVER + '/hello')
      .then(function (res) {
        console.log(res);
        return res;
      });
  }

  return apiFlyingMonkey;
}
