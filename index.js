#!/usr/bin/env node
const meow = require('meow');
const init = require('./utils/init');
const alert = require('./utils/alert');
const {bio, social} = require('./utils/data');

// log
const log = console.log;

const helpText = `
	Usage
		npx fancn21th [options]

	Options
		social					Show social information
		--no-social  		Not show social information

	Examples
		npx fancn21th --no-social
`;

const options = {
	flags: {
		social: {
			type: 'boolean',
			default: true
		}
	}
};

const cli = meow(helpText, options);

(() => {
	init();

	log(bio);

	cli.flags.social && log(social);

	alert({
		type: 'info',
		name: 'CLI ARGV',
		message: 'See Below'
	});

	log(`cli input`, cli.input);
	log(`cli flags`, cli.flags);
})();
