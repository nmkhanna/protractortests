var InventoryFinancialDiffPage = function() {
	browser.get('http://localhost:8000/#/inventory/search/diff');
};

InventoryFinancialDiffPage.prototype = Object.create({}, {
	locations : { get : function() {
			return element.all(by.repeater('location in locations'));
		}},
	selectLocation: { value: function(index){
		this.locations.get(index).click();
	}},
	diffs: {get: function() {
		return element.all(by.repeater('diff in results.results'));
	}}
	
	
});

module.exports = InventoryFinancialDiffPage;