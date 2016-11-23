function(pricesNASDAQ, printRecord, stopButton) {
	var stopButtonClicks = Observable.fromEvent(stopButton,"click"),//usage fromEvent
		microsoftPrices =
			pricesNASDAQ.
				filter(function(priceRecord) {
					return priceRecord.name === "MSFT";
				}).
				takeUntil(stopButtonClicks); //using takeuntil

	microsoftPrices.
		forEach(function(priceRecord) {
			printRecord(priceRecord);
		});
}
