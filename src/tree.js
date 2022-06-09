const {
  Addition,
  Subtraction,
  Multiplication,
  Division,
} = require("./tree-operations")

class Node {
  // Refactored to take an arbitrary number of operands, if we need to implement
  // operations with more than 2
  constructor(operator, ...operands) {
    this.operator = operator;
    this.operands = operands;
  }

  result() {
    throw new Error("Instance of Node subclass missing result function")
  }

  toString() {
    throw new Error("Instance of Node subclass missing toString function")
  }
}

class ValueNode extends Node {
  constructor(value) {
    super("");
    this.value = value;
  }

  result() {
    return this.value;
  }

  toString() {
    return this.value.toString();
  }
}

class ExpressionNode extends Node {
  result() {
    switch (this.operator) {
      // Made operations into seperate static classes to allow adding more complicated operations
      // without making ExpressionNode too huge as well as add some operand checking. This turns
      // ExpressionNode into the part that translated the symbol to the appropriate operation.
      case "+":
        return Addition.result(this.operands);
      case "-":
        return Subtraction.result(this.operands);
      case "x":
        return Multiplication.result(this.operands);
      case "÷":
        return Division.result(this.operands);
      default:
        return this.value;
    }
  }

  toString() {
    switch (this.operator) {
      case "+":
        return Addition.toString(this.operands)
      case "-":
        return Subtraction.toString(this.operands)
      case "x":
        return Multiplication.toString(this.operands)
      case "÷":
        return Division.toString(this.operands)
      default:
        return this.value.toString();
    }
  }
}

module.exports = {
  ValueNode,
  ExpressionNode,
}