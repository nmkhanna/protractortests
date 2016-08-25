var InventorySummaryByDcPage = function() {
	browser.get('http://localhost:8000/#/inventory/summary/dc');
};

InventorySummaryByDcPage.prototype = Object.create({}, {
	sku : { get : function() {
		return element(by.model('dcSku'));
	}},
	searchButton: {get: function() {
		return element(by.buttonText('Search'));
	}},
	search: { value: function(sku){
		this.sku.clear().sendKeys(sku);
		this.searchButton.click();
	}},
	companies: {get: function() {
		return element.all(by.repeater('company in dcCompanies'));
	}}	
});

module.exports = InventorySummaryByDcPage;