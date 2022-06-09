class Operation {
  static numberOfOperands = 1
  static hasNumberOfOperands(operands) {
    return Array.isArray(operands) && operands.length === this.numberOfOperands
  }
}

class Addition extends Operation {
  static numberOfOperands = 2;
  static result(operands) {
    this.hasNumberOfOperands(operands)
    return operands[0].result() + operands[1].result()
  }

  static toString(operands) {
    return `(${operands[0].toString()} + ${operands[1].toString()})`
  }
}

class Subtraction extends Operation {
  static numberOfOperands = 2;
  static result(operands) {
    this.hasNumberOfOperands(operands)
    return operands[0].result() - operands[1].result()
  }

  static toString(operands) {
    return `(${operands[0].toString()} - ${operands[1].toString()})`
  }
}

class Multiplication extends Operation {
  static numberOfOperands = 2;
  static result(operands) {
    this.hasNumberOfOperands(operands)
    return operands[0].result() * operands[1].result()
  }

  static toString(operands) {
    return `(${operands[0].toString()} x ${operands[1].toString()})`
  }
}

class Division extends Operation {
  static numberOfOperands = 2;
  static result(operands) {
    this.hasNumberOfOperands(operands)
    return operands[0].result() / operands[1].result()
  }

  static toString(operands) {
    return `(${operands[0].toString()} ÷ ${operands[1].toString()})`
  }
}

module.exports = {
  Addition,
  Subtraction,
  Multiplication,
  Division,
}