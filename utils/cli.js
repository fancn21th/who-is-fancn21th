const meow = require('meow');

const helpText = `
Usage
	npx fancn21th [options]

Options
	-s,	--social					Show social information
	--no-social  					Not show social information
	-d,	--debug						Show debug information

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
		}
	}
};

module.exports = meow(helpText, options);
