## Exercícios da Aula 08

### Exercício 1 – Script `test:coverage` no `package.json`
Adicionado o script `test:coverage` que executa o Jest com relatório LCOV e texto, com thresholds mínimos de 80% em todas as métricas.

```bash
npm run test:coverage
```

**Resultado obtido:**

| Arquivo    | Statements | Branches | Functions | Lines |
|------------|-----------|----------|-----------|-------|
| alerta.js  | 100%      | 100%     | 100%      | 100%  |

### Exercício 2 – Pipeline CI com cobertura em PRs
Arquivo: `.github/workflows/ci-coverage.yml`  
Dispara em qualquer PR para `main`, executa os testes com cobertura, posta comentário automático no PR e salva o relatório HTML como artefato por 30 dias.

### Exercício 3 – Configuração do Codecov
Arquivo: `codecov.yml`  
O Codecov é integrado via GitHub Action (abordagem oficial moderna — sem pacote npm legado, que possui vulnerabilidades conhecidas). A configuração define:
- Cobertura mínima de 80% no projeto e em patches de PRs.
- Flag `alertas` para rastrear especificamente o módulo crítico `src/alerta.js`.

> **Nota sobre segurança:** O pacote `codecov` (npm CLI legado) foi avaliado e **não instalado**, pois apresenta vulnerabilidades moderadas (`js-yaml`, `uuid`). A abordagem oficial recomendada pela Codecov é a `codecov/codecov-action` diretamente no pipeline, sem dependência npm.

### Exercício 4 – Upload automático ao Codecov
Arquivo: `.github/workflows/codecov.yml`  
A cada push em `main`/`dev` ou PR para `main`, o pipeline gera o `lcov.info` e envia ao Codecov com a flag `alertas`, permitindo rastrear historicamente a cobertura dos módulos críticos.

**Pré-requisito:** Adicionar o `CODECOV_TOKEN` em `Settings > Secrets and variables > Actions` do repositório GitHub.

### Exercício 5 – Badges no README
Dois badges adicionados ao topo deste README:

| Badge | O que indica |
|-------|-------------|
| `CI - Cobertura de Testes` | Status do pipeline (passing / failing) |
| `codecov` | Percentual de cobertura de linhas na branch `main` |

---

## Como executar localmente

```bash
npm install
npm test
npm run test:coverage
npm audit
```
