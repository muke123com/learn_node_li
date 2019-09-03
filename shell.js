const colors = require('colors')
const shell = require('shelljs')

shell.echo('what\'s this');
shell.cd('bin')
console.log(shell.ls('*.js'))
shell.cd('..') 