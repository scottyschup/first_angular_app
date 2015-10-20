var textFormatting = angular.module('textFormatting', []);
textFormatting.factory('titleCase', [function (str) {
  var str_arr = str.split(' '),
      cap_arr = [];
  str_arr.forEach(function (word) {
    if (word[0]) {
      cap_arr.push(word[0].toUpperCase() + word.slice(1));
    }
  });

  return cap_arr.join(' ');
}]);
