// Exercício 2 - Mock de função externa para simular chamadas externas com Jest

const api = { enviar: jest.fn(() => "Simulado!") };

test("simulação de envio", () => {
  const resposta = api.enviar();
  expect(resposta).toBe("Simulado!");
});

test("mock foi chamado uma vez", () => {
  api.enviar();
  expect(api.enviar).toHaveBeenCalled();
});
