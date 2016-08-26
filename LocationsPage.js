var LocationsPage = function() {
	browser.get('http://localhost:8000/#/locations');
};

LocationsPage.prototype = Object.create({}, {
	show100Button: {
		get: function() {
			return element(by.partialButtonText('100'));
		}
	},
	toggle: {
		value: function() {
			this.show100Button.click();
		}
	},
	locationsCount: {
		value: function() {
			return element.all(by.repeater("result in results.results")).count();
		}
	}
});

module.exports = LocationsPage;
