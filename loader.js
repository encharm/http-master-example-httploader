var request = require('request');

module.exports = function(argv, data, finish) {
	var parsed = JSON.parse(data);
	request(parsed.url, function(err, data) {
		finish(err, JSON.parse(data.body));
	});
};