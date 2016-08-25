var DemandDashboardPage = function() {
	browser.get('http://localhost:8000/#/allocation/demands/dashboard');
};

DemandDashboardPage.prototype = Object.create({}, {
	orderLines : {
		get : function() {
			return element.all(by.repeater('result in dcAgedDemands.results')).count();
		}
	}
});

module.exports = DemandDashboardPage;