# Decisões de arquitetura

Registro de decisões relevantes, para não depender de lembrar a conversa onde foram tomadas.

## ADR 1 — Sem backend; sem framework de UI

**Data:** 2026-08-17
**Status:** aceito

### Contexto
Ao pesquisar apps de habit tracker reais, o usuário notou que quase nenhum é "vanilla" e que a maioria usa backend. Isso levantou a dúvida se o habit-tracker deveria seguir o mesmo caminho.

São duas decisões independentes:
1. Framework de UI (React/Vue/Svelte) vs vanilla + DOM puro.
2. Backend/API própria vs dados 100% no navegador.

### Decisão
- **Sem backend.** Toda a persistência é local, no navegador (`localStorage` para começar; `IndexedDB` é um possível stretch goal, não obrigatório).
- **Sem framework de UI** (já previsto em `regras-de-colaboracao.md`, regra 6).

### Por que
- O objetivo do projeto é aprender **fundamentos de TypeScript** (ver `contexto.md`), não replicar as escolhas de um produto comercial.
- Apps reais usam framework por produtividade em escala, e backend por motivos de **negócio** (sync entre dispositivos, backup na nuvem, notificações push, contas de usuário, monetização) — nenhum desses motivos existe aqui: é um projeto de estudo, de um único usuário.
- Todo o roteiro de conceitos (`roteiro-de-aprendizado.md`: types/interfaces, unions, generics, classes, narrowing, datas, utility types, DOM tipado) é coberto sem depender de backend. O item 9 (persistência via `Store<T>` genérico) é atendido por `localStorage`.
- Introduzir backend agora dividiria o foco entre "aprender TS" e "aprender backend" (Node/Express, banco de dados, API REST, autenticação) — duas skills diferentes, e a regra 2 pede passos pequenos, sem saltos grandes não combinados antes.

### Consequências
- Nenhum código de servidor, API, autenticação ou banco de dados neste projeto.
- Vanilla + DOM nativo continua sendo a escolha de UI.
- Full-stack/backend fica registrado como **possível projeto futuro separado**, não uma extensão deste.

### Quando reconsiderar
Se um dia o usuário quiser sincronizar hábitos entre dispositivos, fazer backup na nuvem, ou explorar TypeScript no backend (Node/Express) como aprendizado deliberado — isso deve ser tratado como uma decisão nova e explícita (ex: projeto v2, ou uma branch `feature/sync-api` bem mais adiante), não uma extensão informal deste projeto.
