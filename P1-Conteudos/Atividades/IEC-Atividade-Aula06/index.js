const express = require('express');
const pino = require('pino');
const pinoHttp = require('pino-http');
const client = require('prom-client');

const logger = pino();
const app = express();

// Middleware de log estruturado
app.use(pinoHttp({ logger }));

// Configuração de Métricas (Exercício 4)
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();
const errorCounter = new client.Counter({
  name: 'app_errors_total',
  help: 'Total de erros simulados na aplicação'
});

app.get('/', (req, res) => {
  logger.info({ evento: 'acesso_home' }, 'Acessaram a rota principal');
  res.send('Olá! Logs e Métricas funcionando.');
});

app.get('/erro', (req, res) => {
  errorCounter.inc(); // Incrementa a métrica de erro
  logger.error({ evento: 'erro_simulado', modulo: 'pagamento' }, 'Ocorreu um erro crítico!');
  res.status(500).send('Erro interno!');
});

// Rota para o Prometheus ler as métricas
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(3000, () => {
  logger.info({ porta: 3000 }, 'Servidor iniciado com sucesso');
});