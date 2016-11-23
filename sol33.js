function(sprite, spriteContainer) {
		var spriteMouseDowns = Observable.fromEvent(sprite, "mousedown"),
		spriteContainerMouseMoves = Observable.fromEvent(spriteContainer, "mousemove"),
		spriteContainerMouseUps = Observable.fromEvent(spriteContainer, "mouseup"),
		spriteMouseDrags =
			spriteMouseDowns.
				concatMap(function(contactPoint) {
					return spriteContainerMouseMoves.
						takeUntil(spriteContainerMouseUps).
						map(function(movePoint) {
							return {
								pageX: movePoint.pageX - contactPoint.layerX,
								pageY: movePoint.pageY - contactPoint.layerY
							};
						});
				});

	spriteMouseDrags.forEach(function(dragPoint) {
		sprite.style.left = dragPoint.pageX + "px";
		sprite.style.top = dragPoint.pageY + "px";
	});
}
