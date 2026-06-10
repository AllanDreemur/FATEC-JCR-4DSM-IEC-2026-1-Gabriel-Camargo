// Exercício 7 - Teste de Integração: classificarAlerta + enviarNotificacao combinadas
const { classificarAlerta, enviarNotificacao } = require("./src/alerta");

test("classificação + notificação", () => {
  const alerta = classificarAlerta(90);
  const resultado = enviarNotificacao(alerta);
  expect(resultado).toBe("Notificação enviada: Crítico");
});

test("classificação alto + notificação", () => {
  const alerta = classificarAlerta(75);
  const resultado = enviarNotificacao(alerta);
  expect(resultado).toBe("Notificação enviada: Alto");
});
