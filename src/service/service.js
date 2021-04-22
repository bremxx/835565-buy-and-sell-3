'use strict';

const {MocksGenerator} = require(`../mocks-generator`);

const {
  DEFAULT_COMMAND,
  USER_ARGV_INDEX,
  ExitCode
} = require(`../mocks-generator/const`);

const userArguments = process.argv.slice(USER_ARGV_INDEX);
const [userCommand] = userArguments;

if (userArguments.length === 0 || !MocksGenerator[userCommand]) {
  MocksGenerator[DEFAULT_COMMAND].run();
  process.exit(ExitCode.success);
}

MocksGenerator[userCommand].run(userArguments.slice(1));