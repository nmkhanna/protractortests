var RetailSearchByCotPage = function() {
	browser.get('http://localhost:8000/#/sale/customerorder/');
};

RetailSearchByCotPage.prototype = Object.create({}, {
	cot : { get : function() {
		return element(by.model('search.cot'));
	}},
	searchButton: {get: function() {
		return element(by.buttonText('Search COT'));
	}},
	searchCot: { value: function(cot){
		this.cot.clear().sendKeys(cot);
		this.searchButton.click();
	}},
	orderLines: {get: function() {
		return element.all(by.repeater('line in order.lines'));
	}}	
});

module.exports = RetailSearchByCotPage;