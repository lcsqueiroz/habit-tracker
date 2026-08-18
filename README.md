# Habit Tracker

Projeto de **estudo de TypeScript**, construído a partir do livro _"Aprendendo TypeScript"_ (Learning TypeScript, Josh Goldberg).

## Objetivo

Usar um rastreador de hábitos como pretexto para praticar, em ordem, os conceitos fundamentais de TypeScript: modelagem de tipos, union types, funções tipadas, generics, classes, narrowing, datas, utility types e DOM tipado. O mapeamento completo entre funcionalidade do app e conceito do livro está em [`.claude/docs/roteiro-de-aprendizado.md`](.claude/docs/roteiro-de-aprendizado.md).

## O que este projeto não é

- Não é um app de produção: sem backend, sem framework de UI (React/Vue/etc.), sem testes automatizados por enquanto. Ver [`.claude/docs/decisoes-arquitetura.md`](.claude/docs/decisoes-arquitetura.md) para o porquê.
- Não é "vibe coded": cada funcionalidade é implementada aos poucos, com o conceito de TypeScript envolvido explicado antes ou junto do código.

## Como rodar

Pré-requisito: Node.js instalado.

```bash
cd app
npm install
npm run dev
```

Abre em `http://localhost:5173` (padrão do Vite).

Outros comandos (executados a partir de `app/`):

- `npm run build` — checagem de tipos (`tsc`) seguida de build de produção (`vite build`)
- `npm run preview` — serve o build de produção localmente

## Documentação

- **[GUIA-TECNICO.md](GUIA-TECNICO.md)** — explica a lógica de cada parte do projeto, do raciocínio em alto nível até a implementação em TypeScript, seção por seção, conforme os conceitos vão sendo aprendidos.
- **`.claude/docs/`** — contexto do projeto, regras de colaboração, roteiro de aprendizado, progresso e decisões de arquitetura.
