const fetch = require('node-fetch');

const url = `https://api.github.com/users/fancn21th`;
const log = console.log;

module.exports = async () => {
	const response = await fetch(url);
	const data = await response.json();

	log(`Public Repos: ${data.public_repos}\n`);
};
