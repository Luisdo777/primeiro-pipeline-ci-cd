const { somar } = require("../app");

describe("Testes da função somar", () => {
  test("deve somar dois números positivos corretamente", () => {
    expect(somar(4, 5)).toBe(9);
  });

  test("deve somar números negativos", () => {
    expect(somar(-2, -3)).toBe(-5);
  });

  test("deve somar um número positivo e um negativo", () => {
    expect(somar(10, -5)).toBe(5);
  });

  test("deve retornar o próprio número ao somar com zero", () => {
    expect(somar(7, 0)).toBe(7);
  });

  test("deve somar números decimais", () => {
    expect(somar(1.5, 2.3)).toBeCloseTo(3.8);
  });
});