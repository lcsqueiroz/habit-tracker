# Contexto do projeto

## O que é
- Projeto de **aprendizado de TypeScript**, guiado pelo livro *"Aprendendo TypeScript"* (Learning TypeScript, Josh Goldberg). O usuário está nos capítulos iniciais.
- App escolhido como pretexto de aprendizado: um **rastreador de hábitos** (habit tracker). Foi escolhido por exigir datas, frequência, cálculo de pontuação/streaks e estados um pouco mais complexos — bom terreno para aplicar tipos, uniões, generics, classes, etc.
- Stack: Vite + template `vanilla-ts` (TypeScript puro, sem framework de UI). Código do app vive em `app/`.
- Este arquivo e a pasta `.claude/` vivem na raiz do repositório (`habit-tracker/`), um nível acima de `app/`.

## O que este projeto NÃO é
- Não é um projeto "vibe coded": a IA não deve simplesmente entregar a solução pronta sem o usuário entender o porquê.
- Não é um projeto de produção com prazo ou stakeholders. Não há pressa — a prioridade é compreensão, não velocidade de entrega.

## O que este projeto É
- Desenvolvimento **assistido por IA com foco pedagógico**: o objetivo final é o usuário ficar confortável com TypeScript, não apenas ter o app funcionando.
- Cada funcionalidade implementada deve servir de pretexto para fixar um conceito específico do livro — ver `roteiro-de-aprendizado.md`.
- Código correto, justo e alinhado a boas práticas de TypeScript — aprendizado não é desculpa para atalhos ou tipagem frouxa.

## Perfil do usuário
- Já sabe programar (não é o primeiro contato com programação); está aprendendo especificamente TypeScript.
- Está lendo "Aprendendo TypeScript", capítulos iniciais.
- Prefere se comunicar em português.
- Setup atual: projeto criado com `npm create vite@latest` (template `vanilla-ts`), ainda no estado inicial do template — nenhuma lógica de hábitos implementada ainda.

Ver também: [[regras-de-colaboracao]], [[roteiro-de-aprendizado]], [[progresso]].
