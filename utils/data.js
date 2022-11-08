const chalk = require('chalk');
// colors
const primaryColor = chalk.hex('#1da1f2').bold.inverse;
const secondaryColor = chalk.hex('#6cc644').bold.inverse;
const textColor = chalk.dim;
const italicTextColor = chalk.italic;

// bio
const bio = `${primaryColor(' Fan, Yi-Jie ')}

${italicTextColor(
	'Software engineer @神州数码. Used to work @HP. Love art and design of good things. Wonder loving programming or not. Into Math in a strange way. After comedies tv series or sci-fi movies. Enjoy different genres of music.'
)}\n`;

// social
const social = `${primaryColor(' Github ')}:   ${textColor('https://github.com/fancn21th')}
${secondaryColor(' Website ')}:  ${textColor('https://fancn21th.cn')}\n`;

module.exports = {
	bio,
	social
};
