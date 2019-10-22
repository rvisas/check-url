#!/usr/bin/env node
const commander = require('commander'); // const chalk = require('chalk');
const mdLink = require('../src/md-links.js');
const stat = require('../src/stats.js');

const program = new commander.Command();
program.version('1.0.0').description('Statistics about markdown files');
program.name('md-links').usage('[options]');
program.option('-v, --validate', 'Valida las URLs identificadas');
program.option('-s, --stats', 'Muestra estadisticas basicas sobre las URLs identificadas.');

program.parse(process.argv);

const getOption = (option1, option2) => {
  let answer = false;
  if (option1 === '--validate' || option2 === 'validate') {
    answer = true;
  }
  return {
    validate: answer,
  };
};

const showCli = (route, option1, option2) => {
  const validate = getOption(option1, option2);
  return mdLink.mdLinks(route, validate).then((response) => {
    let output = '';

    if (response.length === 0) {
      output += 'No se encontraron archivos .md';
    }

    if (option1 === '--stats' && option2 === '--validate') {
      output = `\nTotal: ${response.length} \nUnique: ${stat.uniquesLinks(response)} \nBroken: ${stat.brokenLinks(response)}`;
    }

    if (option1 === '--stats' && option2 === undefined) {
      output = `\nTotal: ${response.length} \nUnique: ${stat.uniquesLinks(response)}`;
    }

    if (option1 === '--validate' && option2 === undefined) {
      response.forEach((objectLink) => {
        output += `\n${objectLink.path} ${objectLink.href} ${objectLink.status} ${objectLink.statusText} ${objectLink.text}`;
      });
    }

    if (option1 === undefined) {
      response.forEach((objectLink) => {
        output += `\n${objectLink.path} ${objectLink.href} ${objectLink.text}`;
      });
    }

    if (option1 !== '--stats' && option1 !== '--validate' && option1 !== undefined) {
      output = 'No se encontró el comando.';
    }

    return output;
  }).catch(() => 'Usa md-links --help');
};

module.exports = {
  showCli,
};
