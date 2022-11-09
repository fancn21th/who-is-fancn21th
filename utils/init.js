const {name: title, description, version} = require('../package.json');
const welcome = require('cli-welcome');
const checkNode = require('cli-check-node');
const unhandled = require('cli-handle-unhandled');

module.exports = () => {
	unhandled();

	welcome({
		title,
		description,
		tagLine: `oh, hello there`,
		version,
		bgColor: `#1da1f2`,
		color: `#000000`,
		bold: true,
		clear: true
	});

	checkNode('12');
};
