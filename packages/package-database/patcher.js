#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const Logger = require('package-logger');
const ora = require('ora');

const logger = new Logger('Patcher');

class Patcher {

    constructor() {
        this.to = process.argv[2];
        this.from = process.argv[3];

        if(!this.to && !this.from) {
            logger.error('Incorrect Syntax');
            logger.error('Usage: patcher.js <to> <from?>');
            logger.error('If you want to execute all patches');
            logger.error('Usage: patcher.js all');
        } else if(this.to && !this.from) {
            if(this.to != "all") {
                Patcher.patch(this.to, null).then(() => {});
            } else {
                Patcher.patch(null, null).then(() => {});
            }
        } else {
            Patcher.patch(this.to, this.from).then(() => {});
        }
    }

    static getFiles(to, from) {
        let files = fs.readdirSync(path.join(__dirname, 'patches'));

        if(files.length <= 0) {
            throw new Error(`There are no files to patch`);
        }

        if(!to && !from) {
            return files;
        } else if(to && !from) {
            let endIndex = undefined;
            for(let file of files) {
                if(file.startsWith(to)) {
                    endIndex = files.indexOf(file) + 1;
                    break;
                }
            }

            if(endIndex !== undefined) {
                return files.slice(0, endIndex);
            } else {
                throw new Error(
                    `Invalid patch query, ${to} is not a valid patch`
                );
            }
        } else {
            if(+to >= +from) {
                let startIndex = undefined;
                let endIndex = undefined;

                for(let file of files) {
                    if(file.startsWith(from)) {
                        startIndex = files.indexOf(file);
                    }

                    if(file.startsWith(to)) {
                        endIndex = files.indexOf(file) + 1;
                    }

                    if(startIndex != undefined && endIndex != undefined)
                        break;
                }

                if(startIndex != undefined && endIndex != undefined) {
                    if(startIndex < endIndex) {
                        return files.slice(startIndex, endIndex);
                    } else {
                        throw new Error(
                            `Invalid patch query, ` +
                            `to patch cannot come before than from patch`
                        );
                    }
                } else if(startIndex != undefined && endIndex == undefined) {
                    throw new Error(`${to} is not a valid patch`);
                } else if(startIndex == undefined && endIndex != undefined) {
                    console.log(startIndex);
                    throw new Error(`${from} is not a valid patch`);
                }
            } else {
                throw new Error(
                    `Invalid patch query, ` +
                    `to patch cannot come before than from patch`
                );
            }
        }
    }

    static async patch(to, from) {
        try {
            let files = Patcher.getFiles(to, from);

            const config = require('transport-co-config');
            config.database.multipleStatements = true;
            const db = require('./index');
            const connection = await db;

            logger.info(`Found ${files.length} patches`);

            let patchStart = Date.now();

            for(let file of files) {
                let spinner = ora(`Executing ${file}`).start();

                try {
                    let start = Date.now();

                    await connection.query(
                        fs.readFileSync(
                            path.join(__dirname, 'patches', file), {
                                encoding: 'utf-8'
                            })
                    );

                    let executionTime = Date.now() - start;
                    spinner.succeed(
                        `Executed ${file} in ${executionTime}ms`
                    );
                } catch(e) {
                    spinner.fail(`Error while executing ${file}.`);
                    logger.error(e);
                    break;
                }
            }

            let executionTime = Date.now() - patchStart;
            logger.success(
                `Executed ${files.length} patches in ${executionTime}ms`
            );
        } catch(e) {
            logger.error(e.message);
        }

        process.exit();
    }
}

new Patcher();
