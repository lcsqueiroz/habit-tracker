# Regras de colaboração

Estas regras existem porque este é um projeto de **aprendizado**, não apenas de entrega. Ver `contexto.md` para o porquê.

1. **Ensinar > entregar.** Antes de implementar algo novo, explique brevemente (2–4 frases, fora do bloco de código) o conceito de TypeScript envolvido: o quê, por quê essa forma e não outra. Não precisa ser uma aula longa, mas não pule essa parte.

2. **Passos pequenos e incrementais.** Prefira uma funcionalidade mínima e correta a várias de uma vez. Se o próximo passo natural for um salto grande no roteiro (ex: pular de "modelar um tipo" direto para "persistência com generics"), avise e pergunte antes de seguir.

3. **Nunca trocar correção por "aprendizado rápido".** Mesmo sendo um projeto de estudo:
   - `strict` do TypeScript sempre ligado (já está no `tsconfig.json` via template).
   - Evitar `any`; preferir `unknown` + type narrowing quando o tipo não for conhecido de antemão.
   - Preferir tipos explícitos onde eles ajudam a entender a intenção (parâmetros de função, retornos de funções de domínio como cálculo de streak).
   - Lógica de negócio (cálculo de streak/pontuação, regras de frequência) deve ficar em funções puras, fáceis de testar mentalmente.

4. **Nomear o conceito aplicado.** Ao escrever ou revisar código, aponte no texto qual conceito do livro está em jogo (ex: "isso é uma union type discriminada" / "aqui estamos usando um utility type `Partial<Habit>`"). Isso ajuda a conectar código ↔ teoria do livro.

5. **Quando o usuário disser que quer tentar sozinho**, atuar como revisor: apontar erros de tipagem e o raciocínio por trás da correção, mas deixar o usuário escrever a primeira tentativa.

6. **Sem frameworks ou abstrações de "app real".** Nada de Redux, RxJS, bibliotecas de state management, ORMs, etc. O objetivo é fundamentos de TypeScript puro + manipulação de DOM nativa, não arquitetura de aplicação de produção.

7. **Sem testes automatizados por enquanto**, a menos que o usuário peça explicitamente. O foco atual é tipagem e lógica de domínio, não cobertura de testes.

8. **Manter o contexto vivo.** Ao final de sessões em que algo relevante for implementado ou decidido, atualizar `progresso.md` com o que foi feito e quais conceitos do roteiro foram cobertos.

## Git: commits, push e branches

9. **Commit e push são permitidos** (o usuário autorizou de forma geral para este projeto), sempre seguindo as regras abaixo.

10. **Conventional Commits obrigatório.** Toda mensagem de commit segue `tipo(escopo opcional): descrição`, com tipos como `feat`, `fix`, `docs`, `refactor`, `chore`, `test`, `security`. Exemplo: `feat(habit): adiciona tipo Habit e validação básica`.

11. **Nunca referenciar Claude/IA como autor do commit ou push.** Não incluir `Co-Authored-By: Claude`, menções a "Claude", "AI" ou similares na mensagem de commit, nem em nenhum metadado do commit/push. O autor do commit é sempre o usuário (configuração de git do próprio usuário).

12. **Branches por tipo de trabalho.** Toda funcionalidade nova, correção ou ajuste de segurança nasce em uma branch dedicada, a partir de `main`:
    - `feature/<nome-curto>` para funcionalidades novas
    - `fix/<nome-curto>` para correções de bug
    - `security/<nome-curto>` para ajustes de segurança
    Ao concluir, faz merge para `main` (a estratégia de merge — merge commit, squash, etc. — é decidida com o usuário no momento, sem preferência fixa ainda).
