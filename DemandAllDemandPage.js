var DemandAllDemandPage = function() {
	browser.get('http://localhost:8000/#/allocation/demands');
};

DemandAllDemandPage.prototype = Object.create({}, {
	demands : {
		get : function() {
			return element.all(by.repeater('demand in results.results')).count();
		}
	}
});

module.exports = DemandAllDemandPage;