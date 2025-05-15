# Inicialização da aplicação Angular (frontend)

## 🔧 Pré-requisitos

- [Node.js (versão 16+)](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)  
  (Instale com: `npm install -g @angular/cli`)
- IDE ([VS Code](https://code.visualstudio.com/Download) recomendado)

---

## 🚀 Passo a passo para iniciar o projeto

### 1. Clone o projeto

**HTTPS:**
~~~ git
git clone https://github.com/SeuUsuario/seu-projeto-angular.git
~~~
ou

SSH:

~~~ git
git clone git@github.com:SeuUsuario/seu-projeto-angular.git
~~~ 

2. Instale as dependências

Acesse o diretório do projeto e execute:
~~~ bash
cd seu-projeto-angular
npm install
~~~ 

3. Rode o projeto localmente

Use o Angular CLI para iniciar o servidor de desenvolvimento:

~~~ bash
ng serve
~~~ 

Ou com abreviação:

~~~ git
ng s
~~~

Abra no navegador:

~~~ bash
http://localhost:4200
~~~

<details>
  <summary>Login na aplicação</summary>

#### Usuário
~~~ git
admin
~~~

#### Senha
~~~ git
admin
~~~ 
---
</details>

<details>
  <summary> Angular </summary>

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.9.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

</details>

<details>
  <summary>Design no figma</summary>

  https://www.figma.com/design/0kAB9NiEbpTpf3NPPohQCW/Gestor-de-trafeas-PROJ?node-id=0-1&t=e7Ab1cXMblo7U2F6-1
  
</details>

---
### Casos de Uso - Gestor de Tarefas (Centro Universitário Projeção)
~~~ txt
1. Gerenciamento de Usuários:

1.1 Cadastrar Novo Usuário:
    Ator Primário: Usuário (visitante ou futuro usuário do sistema).
    Objetivo: Permitir que novos usuários se registrem no sistema.
    Pré-condições: O usuário acessa a tela de cadastro.
    Fluxo Principal:
        1.  O sistema exibe o formulário de cadastro (Nome, Email, Senha, Confirmar Senha).
        2.  O usuário preenche os campos com informações válidas.
        3.  O usuário clica no botão "Cadastrar".
        4.  O sistema verifica se as informações são válidas e se o email não está cadastrado.
        5.  O sistema cria uma nova conta de usuário.
        6.  O sistema informa ao usuário que o cadastro foi realizado com sucesso.
    Fluxos Alternativos:
        2a. Campos inválidos: Se algum campo for preenchido incorretamente ou estiver em branco, o sistema exibe uma mensagem de erro indicando o problema.
        3a. Email já cadastrado: Se o email fornecido já existir no sistema, o sistema exibe uma mensagem de erro.

1.2 Listar Usuários:
    Ator Primário: Administrador do sistema.
    Objetivo: Visualizar a lista de todos os usuários cadastrados no sistema.
    Pré-condições: O administrador está logado no sistema e acessa a tela de listagem de usuários.
    Fluxo Principal:
        1.  O sistema recupera a lista de todos os usuários do banco de dados.
        2.  O sistema exibe a lista em uma tabela com as colunas: Nº, Nome, CPF, Email, Função e Status.

1.3 Cadastrar Usuário (Administrador):
    Ator Primário: Administrador do sistema.
    Objetivo: Permitir que o administrador cadastre novos usuários com diferentes funções no sistema.
    Pré-condições: O administrador está logado no sistema e acessa a tela de cadastro de usuário (administrador).
    Fluxo Principal:
        1.  O sistema exibe o formulário de cadastro de usuário (Nome, Email, CPF, Senha, Função).
        2.  O administrador preenche os campos com informações válidas e seleciona a função do novo usuário.
        3.  O administrador clica no botão "Cadastrar".
        4.  O sistema verifica se as informações são válidas e se o email/CPF não estão cadastrados.
        5.  O sistema cria uma nova conta de usuário com a função especificada.
        6.  O sistema informa ao administrador que o usuário foi cadastrado com sucesso.
    Fluxos Alternativos: (Semelhantes ao caso de uso 1.1 para campos inválidos e email/CPF já cadastrados).

2. Autenticação:

2.1 Acessar o Sistema (Login):
    Ator Primário: Usuário cadastrado.
    Objetivo: Permitir que usuários cadastrados façam login no sistema.
    Pré-condições: O usuário acessa a tela de login.
    Fluxo Principal:
        1.  O sistema exibe o formulário de login (Email, Senha).
        2.  O usuário preenche os campos com suas credenciais.
        3.  O usuário clica no botão "Acessar".
        4.  O sistema verifica as credenciais no banco de dados.
        5.  Se as credenciais forem válidas, o sistema autentica o usuário e o redireciona para a tela principal do sistema.
    Fluxos Alternativos:
        4a. Credenciais inválidas: Se o email ou a senha estiverem incorretos, o sistema exibe uma mensagem de erro.
        4b. Conta inativa: Se a conta do usuário estiver inativa, o sistema exibe uma mensagem informando o problema.

2.2 Recuperar Senha (Esqueci minha senha):
    Ator Primário: Usuário cadastrado.
    Objetivo: Permitir que usuários recuperem suas senhas esquecidas.
    Pré-condições: O usuário clica no link "Esqueci minha senha" na tela de login.
    Fluxo Principal:
        1.  O sistema exibe um formulário para inserir o email.
        2.  O usuário informa seu email e clica em "Enviar".
        3.  O sistema verifica se o email existe no banco de dados.
        4.  Se o email existir, o sistema envia um email com instruções para redefinir a senha.
        5.  O usuário segue as instruções do email para criar uma nova senha.
        6.  O sistema confirma a alteração da senha.
    Fluxos Alternativos:
        3a. Email não encontrado: Se o email informado não existir no sistema, o sistema exibe uma mensagem informando o problema.

3. Gerenciamento de Cursos:

3.1 Listar Cursos:
    Ator Primário: Administrador, Coordenador, ou outros usuários com permissão.
    Objetivo: Visualizar a lista de todos os cursos cadastrados no sistema.
    Pré-condições: O usuário está logado no sistema e acessa a tela de listagem de cursos.
    Fluxo Principal:
        1.  O sistema recupera a lista de todos os cursos do banco de dados.
        2.  O sistema exibe a lista em uma tabela com as colunas: Nº, Nome do curso, Nível, Modalidade e Status.

3.2 Cadastrar Novo Curso:
    Ator Primário: Administrador do sistema.
    Objetivo: Permitir que o administrador cadastre novos cursos no sistema.
    Pré-condições: O administrador está logado no sistema e acessa a tela de cadastro de cursos.
    Fluxo Principal:
        1.  O sistema exibe o formulário de cadastro de curso (Nome, Nível, Modalidade).
        2.  O administrador preenche os campos com informações válidas e seleciona o nível e a modalidade.
        3.  O administrador clica no botão "Cadastrar".
        4.  O sistema verifica se as informações são válidas e se o nome do curso já não existe.
        5.  O sistema cria um novo registro de curso.
        6.  O sistema informa ao administrador que o curso foi cadastrado com sucesso.
    Fluxos Alternativos:
        2a. Campos inválidos: Se algum campo for preenchido incorretamente ou estiver em branco, o sistema exibe uma mensagem de erro.
        4a. Curso já cadastrado: Se o nome do curso já existir no sistema, o sistema exibe uma mensagem de erro.

4. Gerenciamento de Turmas:

4.1 Cadastrar Nova Turma:
    Ator Primário: Administrador ou Coordenador.
    Objetivo: Permitir o cadastro de novas turmas, associando-as a um curso e professor.
    Pré-condições: O usuário está logado e acessa a tela de cadastro de turmas.
    Fluxo Principal:
        1.  O sistema exibe o formulário de cadastro de turma (Nome da Turma, Curso (dropdown), Professor (dropdown), Período).
        2.  O usuário preenche o nome da turma e seleciona o curso, o professor e o período.
        3.  O usuário clica no botão "Cadastrar".
        4.  O sistema verifica se as informações são válidas.
        5.  O sistema cria um novo registro de turma.
        6.  O sistema informa que a turma foi cadastrada com sucesso.
    Fluxos Alternativos:
        2a. Campos inválidos: Se algum campo não for preenchido corretamente.

5. Gerenciamento de Professores:

5.1 Listar Professores:
    Ator Primário: Administrador, Coordenador, ou outros usuários com permissão.
    Objetivo: Visualizar a lista de todos os professores cadastrados no sistema.
    Pré-condições: O usuário está logado e acessa a tela de listagem de professores.
    Fluxo Principal:
        1.  O sistema recupera a lista de todos os professores do banco de dados.
        2.  O sistema exibe a lista em uma tabela com as colunas: Nº, Nome do Professor, CPF, Email e Status.

6. Gerenciamento de Disciplinas:

6.1 Listar Disciplinas:
    Ator Primário: Administrador, Coordenador, Professor, ou outros usuários com permissão.
    Objetivo: Visualizar a lista de todas as disciplinas cadastradas no sistema.
    Pré-condições: O usuário está logado e acessa a tela de listagem de disciplinas.
    Fluxo Principal:
        1.  O sistema recupera a lista de todas as disciplinas do banco de dados.
        2.  O sistema exibe a lista em uma tabela com as colunas: Nº, Nome da disciplina, Carga horária, Ementa e Status.

6.2 Cadastrar Nova Disciplina:
    Ator Primário: Administrador ou Coordenador.
    Objetivo: Permitir o cadastro de novas disciplinas no sistema.
    Pré-condições: O usuário está logado e acessa a tela de cadastro de disciplinas.
    Fluxo Principal:
        1.  O sistema exibe o formulário de cadastro de disciplina (Nome, Professor (dropdown), Carga Horária, Ementa).
        2.  O usuário preenche os campos com informações válidas e seleciona o professor responsável.
        3.  O usuário clica no botão "Cadastrar".
        4.  O sistema verifica se as informações são válidas e se o nome da disciplina já não existe.
        5.  O sistema cria um novo registro de disciplina.
        6.  O sistema informa que a disciplina foi cadastrada com sucesso.
    Fluxos Alternativos:
        2a. Campos inválidos: Se algum campo não for preenchido corretamente.
        4a. Disciplina já cadastrada: Se o nome da disciplina já existir no sistema.
~~~
---
