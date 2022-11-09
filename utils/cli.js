const meow = require('meow');

const helpText = `
		Usage
			npx fancn21th [options] <commands>

		Options
			-s,	--social		Print social information
			--no-social			Not print social information
			-d,	--debug			Print debug information
			-v,	--version		Print version

		Commands
			help						Print CLI help information

		Examples
			npx fancn21th --no-social
`;

const options = {
	flags: {
		social: {
			type: 'boolean',
			default: true,
			alias: 's'
		},
		debug: {
			type: 'boolean',
			default: false,
			alias: 'd'
		},
		version: {
			type: 'boolean',
			default: false,
			alias: 'v'
		}
	}
};

module.exports = meow(helpText, options);
