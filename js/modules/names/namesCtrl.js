angular
  .module('firstApp')
  .controller('NamesCtrl', namesCtrl);

function namesCtrl (formatText) {
  var self = this;

  self.addName = addName;
  self.currentName = '';
  self.greet = greet;
  self.hoverInput = hoverInput;
  self.inputDisabled = false;
  self.removeInput = removeInput;
  self.revealInput = revealInput;

  function addName (newName) {
    self.names = {};
    self.names.titleName = { case: 'Title Case', name: formatText.titleCase(newName) };
    self.names.camelName = { case: 'Camel Case', name: formatText.camelCase(newName) };
    self.names.snakeName = { case: 'Snake Case', name: formatText.snakeCase(newName) };
    self.names.upperName = { case: 'Upper Case', name: formatText.upperCase(newName) };
    self.names.lowerName = { case: 'Lower Case', name: formatText.lowerCase(newName) };

    self.removeInput();
  }

  function greet (currentName) {
    return "Hello, " + currentName + "!";
  }

  function hoverInput (ev) {
    var x = ev.x,
        y = ev.y;

    console.log(x, y);
  }

  function removeInput () {
    if (self.currentName) {
      self.inputDisabled = true;
    }
  }

  function revealInput () {
    self.inputDisabled = false;
  }
}
