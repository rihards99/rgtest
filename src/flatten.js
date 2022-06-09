const flatten = (options) => {

  const flat = (accumulator, element) => {
    if (Array.isArray(element)) {
      return accumulator.concat(element.reduce((acc, e) => flat(acc, e), []))
    } else {
      accumulator.push(element)
      return accumulator
    }
  }

  const json = JSON.parse(options.json)
  if (!Array.isArray(json)) {
    throw new Error("JSON input provided is not an array")
  }
  return json.reduce((acc, e) => flat(acc, e), [])
}

module.exports = flatten


