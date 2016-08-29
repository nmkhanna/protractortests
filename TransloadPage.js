var TransloadPage = function() {
	browser.get('http://localhost:8000/#/locations');
};

TransloadPage.prototype = Object.create({}, {
	allStatusesOption: {
		get: function() {
			return element(by.cssContainingText('option', 'All Statuses'));
		}
	},
	populate: {
		value: function() {
			this.allStatusesOption.click();
		}
	},
	resultsCount: {
		value: function() {
			return element.all(by.repeater('result in results.results')).count();
		}
	}
});

module.exports = TransloadPage;
