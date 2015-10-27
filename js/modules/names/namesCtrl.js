angular
  .module('firstApp')
  .controller('NamesCtrl', namesCtrl);

function namesCtrl (formatText, apiMonkey, $scope) {
  var self = this;

  self.addName = addName;
  self.allNames = [];
  self.currentName = '';
  self.deleteName = deleteName;
  self.getAllNames = getAllNames;
  self.greet = greet;
  self.hoverInput = hoverInput;
  self.inputDisabled = false;
  self.message = '';
  self.removeInput = removeInput;
  self.removeNameFromList = removeNameFromList;
  self.revealInput = revealInput;

  self.getAllNames();

  function addName (newName) {
    self.names = {};

    self.names.titleName = { case: 'Title Case', name: formatText.titleCase(newName) };
    self.names.camelName = { case: 'Camel Case', name: formatText.camelCase(newName) };
    self.names.snakeName = { case: 'Snake Case', name: formatText.snakeCase(newName) };
    self.names.upperName = { case: 'Upper Case', name: formatText.upperCase(newName) };
    self.names.lowerName = { case: 'Lower Case', name: formatText.lowerCase(newName) };

    var data = { name: { "name": newName } };
    apiMonkey.post('/names', data)
      .then(function (res) {
        self.allNames.push(res.data);
        self.removeInput();
      });
  }

  function deleteName (id) {
    var cb = function () {
      apiMonkey.delete("/names", id)
        .then(function (res) {
          self.removeNameFromList(id);
        });
    }

    apiMonkey.simulateDelay(cb);
  }

  function getAllNames () {
    apiMonkey.get("/names")
      .then(function (res) {
        self.allNames = res.data;
      });
  }

  function greet (currentName) {
    return "Hello, " + currentName + "!";
  }

  function hoverInput (ev) {
    var x = ev.x,
        y = ev.y;
    self.$tooltip = $(document.querySelector('#tooltip'));
    self.$tooltip.css({
      'left': x + 'px',
      'top': y + 'px',
      'opacity': '1'
    });

    setTimeout(function () {
      self.$tooltip.css('opacity', '0');
    }, 1500);

  }

  function removeInput () {
    if (self.currentName) {
      self.inputDisabled = true;
    }
  }

  function removeNameFromList (id) {
    self.allNames = self.allNames.filter(function (name) {
      return name.id !== id;
    })
  }

  function revealInput () {
    self.currentName = '';
    self.inputDisabled = false;
  }
}
