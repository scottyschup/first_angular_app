angular
  .module('firstApp')
  .directive('hovering', hoveringDirective);

  function hoveringDirective () {
    return {
      scope: { hovering: '=' },
      link: function (scope, element) {
        element.bind('mouseenter', function (ev) {
          scope.hovering(ev);
        });
      }
    };
  }
