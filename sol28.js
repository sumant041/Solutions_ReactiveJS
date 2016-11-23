
//Subscribing to an event

function(button) {
  var handler = function(ev) {
    button.removeEventListener("Click", handler);
    alert("Trump - President!!")
  };
  button.addEventListner("Click",handler);
}
