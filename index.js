#!/usr/bin/env node
const { name: title, description, version } = require("./package.json");
const welcome = require("cli-welcome");
const chalk = require("chalk");
const log = console.log;
const primaryColor = chalk.hex("#1da1f2").bold.inverse;
const secondaryColor = chalk.hex("#6cc644").bold.inverse;
const textColor = chalk.dim;
const italicTextColor = chalk.italic;

welcome({
  title,
  description,
  tagLine: `hello there`,
  version,
  bgColor: `#1da1f2`,
  color: `#000000`,
  bold: true,
  clear: false,
});

log(`
${primaryColor(" Fan, Yi-Jie ")}

${italicTextColor(
  "Software engineer @Digitalchina. Used to work @HP. Love art and design of everything. Wonder loving programming or not. Into Math in a strange way. After sci-fi or action movies. Enjoy different genres of music."
)}

${primaryColor(" Github ")}:   ${textColor("https://github.com/fancn21th")}
${secondaryColor(" Website ")}:  ${textColor("https://fancn21th.cn")}
`);
