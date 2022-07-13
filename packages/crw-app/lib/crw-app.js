'use strict';

const {Command} = require('commander')
const chalk = require('chalk')

const packageJson = require('../package.json')

function crwApp() {
    let projectName;
    const program = new Command(packageJson.name)
        .version(packageJson.version)
        .arguments('<project-directory>')
        .usage(`${chalk.green('<project-directory>')}`)
        .action(name => {
            projectName = name
        })
        .parse(process.args)
}

function createApp(name, verbose, version, template, useYarn, usePnp) {

}

module.exports = crwApp;
