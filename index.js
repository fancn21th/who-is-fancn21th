#!/usr/bin/env node
const meow = require('meow');
const init = require('./utils/init');
const alert = require('./utils/alert');
const {bio, social} = require('./utils/data');

// log
const log = console.log;

const options = {
	flags: {
		social: {
			type: 'boolean',
			default: true
		}
	}
};

const cli = meow(`RUN: npx fancn21th`, options);

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
