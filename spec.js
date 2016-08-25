var creds = require('./credentials')
prt = function(s, o) {
	if (o) {
		s += JSON.Stringify(o, null, 2);
	}
	console.log(s);
}

var EC = protractor.ExpectedConditions;
var LocationSkuPage = require('./locationSkuPage');
//var LocationSkuData = require('./locationSkuData');

describe('Mosaic App', function() {
	var page;
	beforeAll(function() {
	    browser.manage().timeouts().setScriptTimeout(120000);
		browser.driver.get('http://localhost:8000/');
		browser.driver.ignoreSynchronization = true;
		browser.driver.findElement(by.id('username')).clear();
		browser.driver.findElement(by.id('username')).sendKeys(creds.username);
		browser.driver.findElement(by.id('password')).clear();
		browser.driver.findElement(by.id('password')).sendKeys(creds.password);
		browser.driver.findElement(by.css('input[type="submit"]')).click();
	});

	afterAll(function() {
		element(by.linkText("Logout")).click();
	});

	afterEach(function() {
		//prt("inside top level afterEach - checking console errors.");
		browser.manage().logs().get('browser').then(function(browserLog) {
			if (browserLog.length > 0)
				prt(browserLog);
			expect(browserLog.length).toEqual(0);
		});
	})

//	describe('Location/Sku Search Functionality', function() {
//		beforeEach(function() {
//			page = new LocationSkuPage();
//			data = new LocationSkuData();
//		});
//
//		it('should show docs section for DC', function() {
//			page.search("6041", "2222469");
//			expect(page.docsRowCount(true)).toBeGreaterThan(0);
//		});
//
//		it('should show docs section for Store', function() {
//			page.search(data.location, data.sku);
//			expect(page.docsRowCount(false)).toBeGreaterThan(0);
//		});
//	});


	describe('Sanity Check', function() {
//		it('should show Demand Dashboard', function() {
//			var DemandDashboardPage = require('./demandDashboardPage');
//			var page = new DemandDashboardPage();
//			expect(page.orderLines).toBeGreaterThan(0);
//		});
//		it('should show Demand - All Demand', function() {
//			var DemandAllDemandPage = require('./demandAllDemandPage');
//			var page = new DemandAllDemandPage();
//			expect(page.demands).toBeGreaterThan(0);
//		});
//		it('should show Inventory - Search - Financial Diff', function() {
//			var InventoryFinancialDiffPage = require('./inventoryFinancialDiffPage');
//			var page = new InventoryFinancialDiffPage();
//			expect(page.locations.count()).toBeGreaterThan(0);
//			page.selectLocation(1);
//			expect(page.diffs.count()).toBeGreaterThan(0);
//		});
//		it('should show Inventory - Summary by company', function() {
//			var InventorySummaryByCompanyPage = require('./inventorySummaryByCompanyPage');
//			var page = new InventorySummaryByCompanyPage();
//			page.search('2222469');
//			expect(page.companies.count()).toBeGreaterThan(0);
//		});
//		it('should show Inventory - Summary by Dc', function() {
//			var InventorySummaryByDcPage = require('./inventorySummaryByDcPage');
//			var page = new InventorySummaryByDcPage();
//			page.search('2222469');
//			expect(page.companies.count()).toBeGreaterThan(0);
//		});
//		it('should show Inventory - Summary by Store', function() {
//			var InventorySummaryByStorePage = require('./inventorySummaryByStorePage');
//			var page = new InventorySummaryByStorePage();
//			page.search('2222469');
//			expect(page.companies.count()).toBeGreaterThan(0);
//		});
//		it('should show Inventory - Summary by FC', function() {
//			var InventorySummaryByFcPage = require('./inventorySummaryByFcPage');
//			var page = new InventorySummaryByFcPage();
//			page.search('2222469');
//			expect(page.companies.count()).toBeGreaterThan(0);
//		});
		// it('should show Retail - Search By COT', function() {
		// 	var RetailSearchByCotPage = require('./retailSearchByCotPage');
		// 	var page = new RetailSearchByCotPage();
		// 	page.searchCot('12100702080320160612'); // TODO: need to get this from DB.
		// 	expect(page.orderLines.count()).toBeGreaterThan(0);
		// });
		it('should load all services', function() {
			var ServiceStatusesPage = require('./serviceStatusesPage');
			var page = new ServiceStatusesPage();
			expect(page.services.count()).toBeGreaterThan(0);
		});

	});

});
