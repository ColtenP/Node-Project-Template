const chalk = require('chalk');
const config = require('package-config');
const moment = require('moment');
const fs = require('fs');
const path = require('path');
const stripAnsi = require('strip-ansi');

module.exports = class Logger {

    constructor(sender) {
        this.sender = sender || "Unknown";
    }

    getSender() {
        return `${chalk.blue('[')}` +
            `${chalk.red(this.sender)}` +
                `${chalk.blue(']')}`;
    }

    getDate() {
        try {
            if(config.logger.displayDate) {
                return `${chalk.blue('[')}` +
                  `${chalk.yellow(moment().format(config.logger.dateFormat))}` +
                  `${chalk.blue(']')}`;
            } else {
                return new String()
            }
        } catch(e) {
            return new String();
        }
    }

    write(output) {
        try {
            if(config.logger.logFile) {
                fs.appendFile(
                    path.resolve(__dirname, '../../', config.logger.logFile),
                    stripAnsi(output) + "\n",
                    'utf8',
                    (err) => {
                        if(err)
                            console.error(err);
                    }
                )
            }
        } catch(e) {
            console.log(e);
            return;
        }
    }

    log(message) {
        let output = `${this.getSender()}${this.getDate()} ${message}`;
        console.log(output);
        this.write(output);
    }

    info(message) {
        let output =
            `${this.getSender()}${this.getDate()} ${chalk.cyan(message)}`;
        console.info(output);
        this.write(output);
    }

    warn(message) {
        let output =
            `${this.getSender()}${this.getDate()} ${chalk.yellow(message)}`;
        console.warn(output);
        this.write(output);
    }

    error(message) {
        let output =
            `${this.getSender()}${this.getDate()} ${chalk.red(message)}`;
        console.error(output);
        this.write(output);
    }

    success(message) {
        let output =
            `${this.getSender()}${this.getDate()} ${chalk.green(message)}`;
        console.log(output);
        this.write(output);
    }
}
