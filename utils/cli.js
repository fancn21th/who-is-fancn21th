const meow = require('meow');
const {green, yellow, cyan} = require('chalk');

const helpText = `
		Usage
			${green('npx fancn21th')} ${yellow('[options]')} ${cyan('<commands>')}

		Options
			${yellow('--social, -s')}				Print social information
			${yellow('--no-social')}				Not print social information
			${yellow('--debug, -d')}				Print debug information
			${yellow('--version, -v')}				Print version

		Commands
			${cyan('help')}					Print CLI help information

		Examples
			${green('npx fancn21th')} ${yellow('--no-social')}
			${green('npx fancn21th')} ${cyan('help')}
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
