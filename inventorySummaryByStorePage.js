var InventorySummaryByStorePage = function() {
	browser.get('http://localhost:8000/#/inventory/summary/store');
};

InventorySummaryByStorePage.prototype = Object.create({}, {
	sku : { get : function() {
		return element(by.model('summary.sku'));
	}},
	searchButton: {get: function() {
		return element(by.buttonText('Search'));
	}},
	search: { value: function(sku){
		this.sku.clear().sendKeys(sku);
		this.searchButton.click();
	}},
	companies: {get: function() {
		return element.all(by.repeater('company in companies'));
	}}	
});

module.exports = InventorySummaryByStorePage;