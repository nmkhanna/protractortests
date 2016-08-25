exports.config = {
	seleniumAddress : 'http://localhost:4444/wd/hub',
	framework : 'jasmine2',
	specs : [ 'spec.js' ],
	jasminNodeOpts : {
		showColors : true,
		defaultTimeoutInterval : 240000, //Jasmin
		allScriptsTimeout: 120000 //protractor
	}
};