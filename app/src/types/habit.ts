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
  /** Caso seja semanal, permite escolher dias específicos da semana. */
  targetDays?: WeekDay[];
  /** Alternativa a `targetDays`: quantas vezes por semana, sem fixar o dia. */
  timesPerWeek?: number;
}

/**
 * Um hábito rastreável pelo usuário.
 *
 * @example
 * ```ts
 * const habit: Habit = {
 *   id: "1",
 *   title: "Beber água",
 *   frequency: { type: "Diário" },
 *   createdAt: new Date(),
 * };
 * ```
 */
export interface Habit {
  id: string;
  title: string;
  description?: string;
  frequency: HabitFrequency;
  /** Usada para calcular sequências (streaks) de conclusão. */
  createdAt: Date;
}
