const cla = require('command-line-args')

const optionDefinitions = [
  { name: 'array', alias: 'a', type: Array },
];

const options = cla(optionDefinitions);

console.log(options); // TODO: The actual script