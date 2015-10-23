angular
  .module('firstApp')
  .factory('formatText', formatText);

function formatText () {
  var formatTextObj = {};
  formatTextObj.camelCase = camelCase;
  formatTextObj.lowerCase = lowerCase;
  formatTextObj.snakeCase = snakeCase;
  formatTextObj.titleCase = titleCase;
  formatTextObj.upperCase = upperCase;

  function camelCase (str) {
    var words = str.split(' '),
        camel_arr = [words[0]];
    for (var i = 1; i < words.length; i ++) {
      camel_arr.push(words[i][0].toUpperCase() + words[i].slice(1));
    }

    return camel_arr.join('');
  }

  function lowerCase (str) {
    var lower_str = '';
    for (var i = 0; i < str.length; i ++) {
      lower_str += str[i].toLowerCase();
    }

    return lower_str;
  }

  function snakeCase (str) {
    var words = str.split(' '),
        snake_arr = [];
    for (var i = 0; i < words.length; i ++) {
      snake_arr.push(words[i][0].toLowerCase() + words[i].slice(1));
    }

    return snake_arr.join('_');
  }

  function titleCase (str) {
    var words = str.split(' '),
        cap_arr = [];
    for (var i = 0; i < words.length; i ++) {
      cap_arr.push(words[i][0].toUpperCase() + words[i].slice(1));
    }

    return cap_arr.join(' ');
  }

  function upperCase (str) {
    var cap_str = '';
    for (var i = 0; i < str.length; i ++) {
      cap_str += str[i].toUpperCase();
    }

    return cap_str;
  }

  return formatTextObj;
}
