var InventorySummaryByCompanyPage = function() {
	browser.get('http://localhost:8000/#/inventory/summary/company');
};

InventorySummaryByCompanyPage.prototype = Object.create({}, {
	sku : { get : function() {
		return element(by.model('cvSku'));
	}},
	searchButton: {get: function() {
		return element(by.buttonText('Search'));
	}},
	search: { value: function(sku){
		this.sku.clear().sendKeys(sku);
		this.searchButton.click();
	}},
	companies: {get: function() {
		return element.all(by.repeater('company in cvCompanies'));
	}}	
});

module.exports = InventorySummaryByCompanyPage;