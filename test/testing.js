#!/usr/bin/env node
const commander = require('commander'); // const chalk = require('chalk');

const program = new commander.Command();

program.version('1.0.0').description('Evaluation of URLs within markdown files');
program.name('md-links').usage('[options]');
program.option('-v, --validate', 'Valida las URLs identificadas');
program.option('-s, --stats', 'Muestra estadisticas basicas sobre las URLs identificadas.');
program.parse(process.argv);

for (let i = 0; i < process.argv.length; i++) {
    console.log(`Index: ${i}, Item: ${process.argv[i]}`);
};
