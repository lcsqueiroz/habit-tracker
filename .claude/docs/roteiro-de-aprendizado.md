# Roteiro de aprendizado

Mapeamento de funcionalidades do habit tracker ↔ conceitos de TypeScript. É um guia, não uma ordem rígida — pode ser ajustado conforme o avanço no livro. Marcar itens conforme forem implementados e refletir isso em `progresso.md`.

1. **Modelagem de dados básica** — `type`/`interface`, literal types
   → definir o tipo `Habit` (id, nome, criado em, etc.)

2. **Union types literais** — conjunto fechado de valores válidos
   → frequência do hábito (diário, semanal, dias específicos da semana)

3. **Funções tipadas** — parâmetros opcionais, valores default, tipo de retorno
   → funções de criação e validação de hábito

4. **Arrays e generics básicos**
   → lista de hábitos; funções genéricas de filtro/busca (`function findBy<T>(...)`)

5. **Classes** — campos, construtor, modificadores de acesso (`private`/`readonly`)
   → `HabitStore` / `HabitService` responsável por gerenciar a coleção de hábitos

6. **Union discriminada + narrowing**
   → status do hábito num dia específico (pendente / concluído / perdido)

7. **Datas e lógica de domínio (sem libs externas de data)**
   → cálculo de streak (sequência) e pontuação, usando `Date` nativo tipado

8. **Utility types** — `Partial`, `Pick`, `Omit`, `Record`
   → formulário de edição de hábito; mapa de status de hábito por dia

9. **Generics mais avançados**
   → repositório genérico de persistência (`Store<T>`) para salvar em `localStorage`. Sem backend/API própria — persistência é 100% local no navegador (ver `decisoes-arquitetura.md`, ADR 1).

10. **Interfaces vs `type`, `extends`, composição**
    → evoluir o modelo `Habit` conforme necessidade (ex: hábitos com metas numéricas)

11. **DOM tipado**
    → `querySelector` com tipos corretos, type assertions seguras, eventos tipados (`addEventListener`)

12. **(Futuro/opcional)** módulos, `declare`, arquivos de definição de tipos — só se surgir necessidade real
