var ServiceStatusesPage = function() {
	browser.get('http://localhost:8000/#/ping');
};

ServiceStatusesPage.prototype = Object.create({}, {
	services: {get: function() {
		return element.all(by.repeater('service in health.resource.services.services'));
	}}	
});

module.exports = ServiceStatusesPage;
