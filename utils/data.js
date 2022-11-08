const chalk = require('chalk');
// colors
const primaryColor = chalk.hex('#1da1f2').bold.inverse;
const secondaryColor = chalk.hex('#6cc644').bold.inverse;
const textColor = chalk.dim;
const italicTextColor = chalk.italic;

// alerts
const symbols = require('log-symbols');
const success = chalk.green.inverse;
const info = chalk.blue.inverse;
const warning = chalk.keyword('orange').inverse;
const error = chalk.red.bold.inverse;

// output

const bio = `
${primaryColor(' Fan, Yi-Jie ')}

${italicTextColor(
	'Software engineer @神州数码. Used to work @HP. Love art and design of good things. Wonder loving programming or not. Into Math in a strange way. After comedies tv series or sci-fi movies. Enjoy different genres of music.'
)}`;

const social = `
${primaryColor(' Github ')}:   ${textColor('https://github.com/fancn21th')}
${secondaryColor(' Website ')}:  ${textColor('https://fancn21th.cn')}
`;

const alerts = `
${symbols.success} ${success(' Success ')} Thanks for viewing my bio.

${symbols.info} ${info(' Info ')} this command cli is very enlightened by Awais.

${symbols.warning} ${warning(' Warning ')} Ready for challenge.

${symbols.error} ${error(' Error ')} I'm out of space.
`;

module.exports = {
	bio,
	social,
	alerts
};
