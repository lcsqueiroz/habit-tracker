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

### 2026-08-18 — Modelagem do `Habit` e union types literais (roteiro itens 1 e 2)
- Criado `app/src/types/habit.ts` com `Habit`, `HabitFrequency`, `FrequencyType` (union de literais de string) e `WeekDay` (union de literais numéricos, alinhada à convenção de `Date.getDay()` nativo — `0` domingo a `6` sábado, importante para o cálculo de streak no item 7).
- Discutido e adiado deliberadamente: `frequency` ainda não é uma union discriminada (permite hoje combinações sem sentido como `type: "Diário"` com `timesPerWeek` preenchido). Fica marcado para revisitar no item 6 (union discriminada + narrowing), sem antecipar agora.
- Praticada documentação via TSDoc/JSDoc: comentários `/** */` nos tipos, uso da tag `@example`. Depois, revisado e enxugado para remover comentários redundantes em campos óbvios (`id`, `title`, `description`, `frequency`) — mantendo comentário só onde há uma regra ou motivo não óbvio pelo nome/tipo (`WeekDay`, o vínculo `targetDays`/`timesPerWeek`, `createdAt`).
- Limpo o boilerplate do template `vanilla-ts` (`counter.ts`, `style.css`, imagens/ícones de exemplo, referências no `main.ts` e `index.html`) — o app agora parte de uma base mínima própria do habit tracker, não mais da demo do Vite.
- Conceitos do roteiro cobertos: **item 1** (type/interface, literal types) e **item 2** (union types literais) — ambos considerados fechados.
- **Próximo passo sugerido:** item 3 do roteiro — funções tipadas de criação/validação de `Habit` (parâmetros opcionais, valores default, tipo de retorno).
