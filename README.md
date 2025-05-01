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
