# Progresso

## Como usar
Atualizar este arquivo ao final de sessões relevantes: o que foi implementado, quais itens do `roteiro-de-aprendizado.md` foram cobertos, e qual é o próximo passo natural. Isso evita perder contexto entre sessões.

## Log

### 2026-08-17 — Setup inicial
- Projeto criado com Vite (template `vanilla-ts`), ainda no estado padrão do template.
- Criada a pasta `.claude/` com contexto do projeto, regras de colaboração e roteiro de aprendizado.
- Nenhum conceito do roteiro foi aplicado ainda.
- **Próximo passo sugerido:** modelar o tipo `Habit` (roteiro item 1 — types/interfaces, literal types).

### 2026-08-17 — Decisão de arquitetura: sem backend, sem framework
- Registrada em `decisoes-arquitetura.md` (ADR 1): persistência 100% local (`localStorage`), sem backend/API própria, sem framework de UI. Motivo: o roteiro de conceitos de TS não depende de backend, e introduzir isso agora dividiria o foco entre aprender TS e aprender backend.
- Atualizados `roteiro-de-aprendizado.md` (item 9) e `contexto.md` para refletir a decisão.
- Nenhum código implementado ainda.
- **Próximo passo sugerido:** modelar o tipo `Habit` (roteiro item 1 — types/interfaces, literal types).
