const alert = require('./alert');
const log = console.log;

module.exports = cli => {
	alert({
		type: 'info',
		name: 'CLI ARGV',
		message: 'See Below'
	});

	log(`cli`, cli);
};
