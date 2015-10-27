angular
  .module('firstApp')
  .factory('apiMonkey', apiMonkey);

function apiMonkey ($http) {
  var apiFlyingMonkey = {};

  apiFlyingMonkey.API_SERVER = 'http://127.0.0.1:8080';
  apiFlyingMonkey.API_VERSION = '/v1';
  apiFlyingMonkey.delete = deleteReq;
  apiFlyingMonkey.get = getReq;
  apiFlyingMonkey.ping = ping;
  apiFlyingMonkey.post = postReq;
  apiFlyingMonkey.simulateDelay = simulateDelay;
  apiFlyingMonkey.update = updateReq;

  function simulateDelay (cb, ms) {
    ms = ms || 500;
    setTimeout(function () {
      cb();
    }, ms);
  }

  function deleteReq (path, id) {
    var url = this.API_SERVER + this.API_VERSION + path + "/" + id;
    return $http.delete(url);
  }

  function getReq (path) {
    var url = this.API_SERVER + this.API_VERSION + path;
    return $http.get(url);
  }

  function postReq (path, data) {
    var url = this.API_SERVER + this.API_VERSION + path;
    return $http.post(url, data);
  }

  function ping () {
    return $http.get(this.API_SERVER + '/hello')
      .then(function (res) {
        return res;
      });
  }

  function updateReq (path, data) {
    var url = this.API_SERVER + this.API_VERSION + path + "/" + data.id;
    return $http.update(url, data);
  }

  return apiFlyingMonkey;
}
