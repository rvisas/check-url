#!/usr/bin/env node

const commander = require('commander'); // const chalk = require('chalk');

const mdLink = require('../src/md-links.js');

const stat = require('../src/stats.js');

const program = new commander.Command();
program.version('1.0.0').description('Stadistics about markdown files');
program
  .name('md-links')
  .usage('[options]')
  .option('--validate', 'Valida todos los links dentro de un archivo MD.')
  .option('--stats', 'Muestra el total de links y el total de links únicos.')
  .option('--stats --validate', 'Muestra el total de links, el total de links únicos y rotos');
program.parse(process.argv);

const getOption = (option1, option2) => {
  if (option1 === '--validate' || option2 === 'validate') {
    return {
      validate: true,
    };
  }

  return {
    validate: false,
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
