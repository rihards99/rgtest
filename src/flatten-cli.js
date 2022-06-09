
const cla = require('command-line-args')
const flatten = require("./flatten")

const optionDefinitions = [
  { name: 'json', alias: 'a', type: String },
];

const options = cla(optionDefinitions);
console.log("options:" , options)

if (!options.json) {
  console.error("Missing --json argument.");
}

console.log("-- Result --")
try {
  console.log(flatten(options))
} catch(e) {
  console.error(e.message)
}
