// alerts
const chalk = require('chalk');
const symbols = require('log-symbols');
const success = chalk.green.inverse;
const info = chalk.blue.inverse;
const warning = chalk.keyword('orange').inverse;
const error = chalk.red.bold.inverse;

const log = console.log;

// const alerts = `
// ${symbols.success} ${success(' Success ')} Thanks for viewing my bio.

// ${symbols.info} ${info(' Info ')} this command cli is very enlightened by Awais.

// ${symbols.warning} ${warning(' Warning ')} Ready for challenge.

// ${symbols.error} ${error(' Error ')} I'm out of space.
// `;

const map = {
	success: {
		symbol: symbols.success,
		name: success(' Success '),
		color: success
	},
	info: {
		symbol: symbols.info,
		name: info(' Info '),
		color: info
	},
	warning: {
		symbol: symbols.warning,
		name: warning(' Warning '),
		color: warning
	},
	error: {
		symbol: symbols.error,
		name: error(' Error '),
		color: error
	}
};

module.exports = ({type = 'success', name = ``, message = ``}) => {
	const resolvedType = map[type];
	const resolvedSymbol = resolvedType.symbol;
	const resolvedName = name ? resolvedType.color(` ${name} `) : resolvedType.name;
	log(`${resolvedSymbol} ${resolvedName}  ${message}\n`);
};
