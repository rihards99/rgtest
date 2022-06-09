const { ValueNode, ExpressionNode } = require("./tree")

test("Expression tree test", () => {
  const tree = new ExpressionNode(
    "÷",
    new ExpressionNode(
      "+",
      new ValueNode(7),
      new ExpressionNode(
        "x",
        new ExpressionNode("-", new ValueNode(3), new ValueNode(2)),
        new ValueNode(5)
      )
    ),
    new ValueNode(6)
  );
  
  expect(tree.toString()).toStrictEqual("((7 + ((3 - 2) x 5)) ÷ 6)");
  expect(tree.result()).toBe(2)
})