# E-MergingTech Landing Page

Este projeto consiste na refatoração de uma landing page da newsletter **E-MergingTech**, originalmente criada com CSS Modules. O objetivo foi **converter todo o CSS para TailwindCSS**, corrigir o design para que ficasse igual à referência fornecida e adicionar uma nova seção “Sobre Nós” (`#about`) destacando a equipe e missão da newsletter.

---

## Funcionalidades implementadas

* Conversão completa do CSS Modules para **TailwindCSS**.
* Estrutura HTML semântica e acessível:

  * Uso de `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>` e `<article>`.
  * Labels claros em formulários.
* Conteúdos realistas substituindo placeholders genéricos.
* Ajustes de layout, espaçamento e responsividade.
* Componentização adequada:

  * Cada componente com **responsabilidade única**.
  * Estrutura de pastas clara e organizada.
* Remoção de código morto e boas práticas de formatação.
* Correção de eventuais bugs e navegação sem erros no console.
* **Nova seção "Sobre Nós" (`#about`)** abaixo da CTA, com conteúdo detalhado sobre a equipe, tempo de carreira, conteúdos mais discutidos e missão da newsletter.
---
## Tecnologias utilizadas

* React com TypeScript (TSX) (componentização e estrutura do projeto)

* TailwindCSS (estilização)

* HTML5 semântico e boas práticas de acessibilidade

* Vite (ferramenta de build e dev server)

HTML5 semântico e boas práticas de acessibilidade
---

## Instalação e execução

1. **Clonar o repositório:**

```bash
git clone https://github.com/maia-leticia/nh-front-test
cd nh-front-test
```

2. **Instalar dependências:**

```bash
npm install
```

3. **Rodar o projeto em modo de desenvolvimento:**

```bash
npm run dev
```
4. **Acessar localmente:**

* Abra seu navegador e vá para http://localhost:5173 (porta padrão do Vite).

---

## Observações

* Todos os estilos foram migrados para **TailwindCSS**, removendo CSS Modules.
* A página é totalmente responsiva e acessível.
* A seção “Sobre Nós” reforça a credibilidade da newsletter, integrando-se ao restante do layout.
