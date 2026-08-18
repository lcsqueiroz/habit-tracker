# Habit Tracker — projeto de aprendizado de TypeScript

Este é um projeto de **aprendizado de TypeScript**, não um projeto de produção. Antes de qualquer trabalho, ler os documentos abaixo — eles definem o que fazer e como colaborar aqui.

@.claude/docs/contexto.md
@.claude/docs/regras-de-colaboracao.md
@.claude/docs/roteiro-de-aprendizado.md
@.claude/docs/progresso.md
@.claude/docs/decisoes-arquitetura.md

## Resumo rápido
- Código do app em `app/` (Vite + template `vanilla-ts`).
- Objetivo: usuário aprender TypeScript de verdade construindo um rastreador de hábitos, com ajuda de IA — não ter a IA construindo tudo sozinha.
- Regra de ouro: explicar o conceito antes/junto do código, avançar em passos pequenos, manter `strict` e boas práticas, atualizar `progresso.md` ao fim de sessões relevantes.
- Git: commit e push autorizados, seguindo Conventional Commits, sem referenciar Claude/IA como autor. Trabalho novo em branches `feature/`, `fix/` ou `security/`, com merge para `main` ao concluir.
- Arquitetura: sem backend, sem framework de UI — persistência 100% local no navegador. Ver `decisoes-arquitetura.md` (ADR 1) para o porquê.

## Comandos (executar a partir de `app/`)
- `npm run dev` — servidor de desenvolvimento com HMR.
- `npm run build` — checagem de tipos (`tsc`) seguida de build de produção (`vite build`).
- `npm run preview` — serve o build de produção localmente.
- Não há lint nem testes configurados (ver regra 7 em `regras-de-colaboracao.md`: sem testes automatizados por enquanto, a menos que pedido explicitamente). A verificação de tipos via `tsc`/`strict` é o principal guarda-corpo de correção.

## Documentação para humanos
- `README.md` — visão geral do projeto e como rodar.
- `GUIA-TECNICO.md` — referência técnica seção por seção (lógica em alto nível → conceito de TS → implementação), atualizado conforme o roteiro avança. Ao fechar um novo item do roteiro, adicionar a seção correspondente aqui também (não só em `progresso.md`).

## Estado atual do código
- `app/src/main.ts` e `app/src/counter.ts` ainda são o boilerplate padrão do template `vanilla-ts` (contador de cliques, links de exemplo do Vite/TypeScript) — nenhuma lógica de hábitos foi implementada ainda.
- `app/tsconfig.json` já vem com `strict` (herdado do template) mais checks extras (`noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`) — manter todos ativos.
- Próximo passo de acordo com `progresso.md`: modelar o tipo `Habit` (item 1 do roteiro).
