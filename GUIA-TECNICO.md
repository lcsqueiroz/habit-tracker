# Guia Técnico — Habit Tracker

Este documento é a referência técnica do projeto. Para cada conceito coberto pelo [roteiro de aprendizado](.claude/docs/roteiro-de-aprendizado.md), existe uma seção aqui explicando o que o código faz, em duas camadas:

1. **Lógica em alto nível** — pseudocódigo, sem sintaxe de nenhuma linguagem específica.
2. **Implementação em TypeScript** — o código real, comentando as construções da linguagem usadas.

As seções são adicionadas conforme o projeto avança — não existe uma seção sobre o item 5 do roteiro antes de o item 5 ter sido implementado. Para saber o que já está pronto e o que vem a seguir, ver [`.claude/docs/progresso.md`](.claude/docs/progresso.md).

---

## 1–2. Modelagem do hábito

> **Roteiro:** item 1 (modelagem de dados básica) e item 2 (union types literais)
> **Código:** [`app/src/types/habit.ts`](app/src/types/habit.ts)

### Lógica em alto nível

```
tipo Frequencia
    tipo_frequencia: "Diário" ou "Semanal"
    dias_da_semana: lista de dias da semana (opcional)
    vezes_por_semana: inteiro (opcional)
fim_tipo

tipo Habito
    id: texto
    titulo: texto
    descricao: texto (opcional)
    frequencia: Frequencia
    criado_em: data
fim_tipo
```

Um hábito é só uma **definição**: nome, com que frequência deve ser praticado, e quando foi criado. Ele ainda não guarda "fiz ou não fiz hoje" — isso é uma entidade separada, do dia a dia, que ainda vamos modelar mais à frente (item 6 do roteiro).

### Conceitos de TypeScript aplicados

- **`interface`** para formas de objeto que podem crescer (`Habit`, `HabitFrequency`).
- **`type` + união de literais** para um conjunto fechado de valores válidos:
  - `FrequencyType = "Diário" | "Semanal"` — união de literais de **string**.
  - `WeekDay = 0 | 1 | ... | 6` — união de literais **numéricos** (mesmo conceito, tipo base diferente).
- **Propriedade opcional (`?`)** em `description`, `targetDays`, `timesPerWeek`.
- **TSDoc** (`/** ... */`) documentando apenas o que não é óbvio pelo nome/tipo (ex: a convenção do `WeekDay`, a relação entre `targetDays` e `timesPerWeek`).

### Implementação (TypeScript)

```ts
export type FrequencyType = "Diário" | "Semanal";

/**
 * Dia da semana, seguindo a mesma convenção do `Date.getDay()` nativo:
 * `0` = Domingo, `1` = Segunda, ..., `6` = Sábado.
 */
export type WeekDay = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Regras de recorrência de um hábito.
 *
 * Quando `type` for `"Semanal"`, use `targetDays` ou `timesPerWeek` para
 * detalhar a recorrência — são formas alternativas, não é preciso preencher as duas.
 */
export interface HabitFrequency {
  type: FrequencyType;
  targetDays?: WeekDay[];
  timesPerWeek?: number;
}

export interface Habit {
  id: string;
  title: string;
  description?: string;
  frequency: HabitFrequency;
  /** Usada para calcular sequências (streaks) de conclusão. */
  createdAt: Date;
}
```

### Decisões e pendências registradas

- `WeekDay` foi alinhado à convenção nativa de `Date.getDay()` de propósito, para não precisar de uma função de conversão quando o cálculo de streak (item 7) manipular `Date` diretamente.
- Hoje nada impede escrever `{ type: "Diário", timesPerWeek: 5 }` — um estado sem sentido, mas que compila. O TypeScript tem uma ferramenta para impedir isso (**union discriminada**), mas ela é o item 6 do roteiro — decidimos não antecipar essa mudança agora.

---

## Próximas seções

Conforme o roteiro avança, cada novo item ganha uma seção aqui, seguindo o mesmo formato (lógica em alto nível → conceitos aplicados → implementação → decisões). O próximo é o **item 3 — funções tipadas de criação e validação de hábito**.
