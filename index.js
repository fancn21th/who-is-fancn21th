#!/usr/bin/env node

const init = require('./utils/init');
const {bio, social, alerts} = require('./utils/data');

// log
const log = console.log;

(() => {
	init();

	log(bio);
	log(social);
	log(alerts);
})();
