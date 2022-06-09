const flatten = require("./flatten")

test("Flattens using provided example [ 1, [ 2, [ 3 ] ], 4 ]", () => {
  const options = {
    json: "[ 1,[ 2, [ 3 ] ], 4 ]"
  }

  expect(flatten(options)).toStrictEqual([1, 2, 3, 4])
})

test("Throws error if provided invalid JSON", () => {
  const options = {
    json: "[ 1, 2, 3"
  }

  expect(() => flatten(options)).toThrow()
})

test("Throws error if provided non-array JSON input", () => {
  const options = {
    json: "{}"
  }

  expect(() => flatten(options)).toThrow()
})