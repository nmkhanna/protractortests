var LocationSkuPage = function() {
	browser.get('http://localhost:8000/#/inventory/search/bylocationsku');
};

LocationSkuPage.prototype = Object.create({}, {
	location : {
		get : function() {
			return element.all(by.model("locationId")).first();
		}
	},
	sku : {
		get : function() {
			return element.all(by.model("sku")).first();
		}
	},
	searchButton : {
		get : function() {
			return element.all(by.buttonText("Search")).first();
		}
	},
	search : {
		value : function(location, sku) {
			this.location.sendKeys(location);
			this.sku.sendKeys(sku);
			this.searchButton.click();
		}
	},
	docsRowCount : {
		value : function(isDc) {
			var rows;
			if (isDc) 
				return element.all(by.repeater('item in docsResult')).count();
			else 
				return element.all(by.repeater('item in inboundAllocations')).count();
		}
	}
});

module.exports = LocationSkuPage;