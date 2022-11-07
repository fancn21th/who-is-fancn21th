#!/usr/bin/env node
const { name: title, description, version } = require("./package.json");
const welcome = require("cli-welcome");

welcome({
  title,
  description,
  tagLine: `hello there`,
  version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: false,
});

console.log(`
Fan, Yi-Jie

Software Engineer.

Github:   https://github.com/fancn21th
Website:  https://fancn21th.cn
`);
