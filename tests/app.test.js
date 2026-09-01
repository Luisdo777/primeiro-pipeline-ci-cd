const { somar } = require("../app");

test("deve somar dois números corretamente", () => {
  expect(somar(4, 5)).toBe(9);
});
