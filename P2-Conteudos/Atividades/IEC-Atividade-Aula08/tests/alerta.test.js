// Exercício 6 - Teste Unitário: classificarAlerta isolada
const { classificarAlerta } = require("../src/alerta");

test("alerta alto", () => {
  expect(classificarAlerta(70)).toBe("Alto");
});

test("alerta crítico", () => {
  expect(classificarAlerta(90)).toBe("Crítico");
});

test("alerta médio", () => {
  expect(classificarAlerta(50)).toBe("Médio");
});

test("alerta baixo", () => {
  expect(classificarAlerta(30)).toBe("Baixo");
});
