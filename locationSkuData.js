var oracledb = require('oracledb');

function getStoreWithInboudOutboud() {
	return 	"select outb.FULFILLLOCATION as location, outb.SKU " +
	"from ( select sku, fulfilllocation from demand where demand_state_id = 'Allocated' and FULFILLLOCATION < 2000 ) outb " + 
	"JOIN (  select sku, receivelocation from demand where demand_state_id = 'Allocated' and RECEIVELOCATION < 2000 ) inb " +
	"ON outb.sku = inb.sku and outb.FULFILLLOCATION = inb.receivelocation where rownum <= 1 "

}
var data;
var LocationSkuData = function() {
	oracledb
		.getConnection(
			{
				user : "alloc",
				password : "alloc",
				connectString : "odad1-scan/ALLOCTST"
			},
			function(err, connection) {
				if (err) { console.error(err.message); return; }
				//console.log(getStoreWithInboudOutboud());
				connection.execute(
					getStoreWithInboudOutboud(),
					function(err, result) {
						if (err) { console.error(err.message); return; }
						data = { location: result.rows[0][0], sku: result.rows[0][1] };
						//console.log(JSON.stringify(data));
					});
			});
};

LocationSkuData.prototype = Object.create({}, {
	location : {
		get : function() {
			return data.location;
		}
	},
	sku: {
		get : function() {
			return data.sku;
		}
	}
});

module.exports = LocationSkuData;