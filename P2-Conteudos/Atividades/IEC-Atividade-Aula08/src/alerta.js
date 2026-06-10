// Funções principais de alerta

/**
 * Classifica o nível de alerta com base no valor fornecido
 * @param {number} valor
 * @returns {string} nível do alerta
 */
function classificarAlerta(valor) {
  if (valor >= 90) return "Crítico";
  if (valor >= 70) return "Alto";
  if (valor >= 50) return "Médio";
  return "Baixo";
}

/**
 * Envia uma notificação com base no nível do alerta
 * @param {string} nivel
 * @returns {string} mensagem de notificação
 */
function enviarNotificacao(nivel) {
  return `Notificação enviada: ${nivel}`;
}

/**
 * Processa um alerta de ponta a ponta: classifica e envia notificação
 * @param {number} valor
 * @returns {string} resultado final
 */
function processarAlerta(valor) {
  const nivel = classificarAlerta(valor);
  return enviarNotificacao(nivel);
}

module.exports = { classificarAlerta, enviarNotificacao, processarAlerta };
