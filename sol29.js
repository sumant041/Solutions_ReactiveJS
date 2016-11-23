//Traversing through an import

function(button) {
	var buttonClicks = Observable.fromEvent(button, "click");
	var subscription =	buttonClicks.forEach(function(clickEvent) {
				subscription.dispose();
			});
}
