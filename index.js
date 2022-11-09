#!/usr/bin/env node
const cli = require('./utils/cli');
const init = require('./utils/init');
const debug = require('./utils/debug');
const {bio, social} = require('./utils/data');

// log
const log = console.log;

(() => {
	init();

	cli.input.includes('help') && cli.showHelp(0);

	log(bio);

	cli.flags.social && log(social);

	cli.flags.debug && debug(cli);
})();
