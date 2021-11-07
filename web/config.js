/* eslint-disable no-console */
const dotenv = require('dotenv');

const result = dotenv.config();
if (result.error) {
  module.exports = process.env;
  console.log('Not using .env file for environment variables');
  console.log(process.env);
  return;
}

const { parsed: envs } = result;
console.log(envs);
module.exports = envs;
