function(button) {
	var buttonClicks = Observable.fromEvent(button, "click");
  buttonClicks.take(1).forEach(function() {
			alert("Button was clicked once. Stopping Traversal.");
		});
}
