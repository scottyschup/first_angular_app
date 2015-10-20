angularApp.controller('NamesController', function () {
  var self = this;
  self.currentName = '';
  self.inputDisabled = false;

  self.greet = function (currentName) {
    return "Hello, " + currentName + "!";
  };

  self.removeInput = function () {
    if (self.currentName) {
      self.inputDisabled = true;
    }
  };

  self.revealInput = function () {
    self.inputDisabled = false;
  };

  self.addName = function (newName) {
    self.currentName = titleCase(newName);
    // self.postRequest({ "name": currentName });
    self.removeInput();
  };
});
